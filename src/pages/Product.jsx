import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import styles from "../styles/product.module.css";
import FunctionContext from "../functionContext.js";

export default function Product() {
  const { id } = useParams();
  const { functionRef } = useContext(FunctionContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addToCart = functionRef.current;

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    addToCart(data, quantity);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  return (
    <div className={styles.product}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={data.image} alt={data.title} />
        </div>

        <div className={styles.right}>
          <h1>{data.title}</h1>
          <div className={styles["right-bottom"]}>
            <p>{data.description}</p>
            <h3>{data.price}€</h3>
            <form
              className={styles["product-form"]}
              onSubmit={(e) => handelSubmit(e)}
            >
              <input
                type="number"
                required={true}
                value={quantity}
                min={1}
                onChange={(e) => handleQuantityChange(e)}
              />
              <button className={styles["add-to-cart"]} type={"submit"}>
                Add To Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
