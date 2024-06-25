import { Link, useOutletContext } from "react-router-dom";
import styles from "../styles/checkout.module.css";

export default function Checkout() {
  const { cart } = useOutletContext();
  const totalCart = parseFloat(
    cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2),
  );
  return (
    <section className={styles.checkout}>
      {cart.length === 0 ? (
        <h2>Cart is empty</h2>
      ) : (
        <h2>
          {cart.reduce((total, curr) => total + curr.quantity, 0)}
          {cart.reduce((total, curr) => total + curr.quantity, 0) === 1
            ? " item"
            : " items"}{" "}
          in the cart
        </h2>
      )}

      {cart.map((item) => (
        <div className={styles["checkout-item"]} key={item.id}>
          <div className={styles.left}>
            <img src={item.image} alt={item.name} />
          </div>

          <div className={styles.right}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}€</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
      <h2>Total Price: {totalCart}€</h2>
      {cart.length > 0 && (
        <Link
          className={styles["checkout-button"]}
          rel={"noopener noreferrer"}
          target={"_blank"}
          to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
        >
          Complete Checkout
        </Link>
      )}
    </section>
  );
}
