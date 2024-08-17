import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/product.module.css";
import Loading from "../components/Loading";

export default function Product() {
  const { id } = useParams();
  const { cart, setCart } = useOutletContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = (item, quantity) => {
    if (cart.filter((x) => x.id === item.id).length === 0) {
      setCart((prev) => [
        ...prev,
        {
          id: item.id,
          name: item.title,
          price: item.price,
          quantity: Number(quantity),
          image: item.image,
        },
      ]);
    } else {
      const itemIndex = cart.findIndex((x) => x.id === item.id);
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += Number(quantity);
      setCart(updatedCart);
    }
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

  if (loading) return <Loading/>;
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
            <div className={styles["quantities"]}>
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
              <button
                className={styles["add-to-cart"]}
                onClick={(e) => handelSubmit(e)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
