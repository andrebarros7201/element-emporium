import { useOutletContext } from "react-router-dom";
import { ShopItem } from "../components/ShopItem.jsx";
import styles from "../styles/shop.module.css";

export default function Shop() {
  const { products } = useOutletContext();
  return (
    <section className={styles.shop}>
      {products.map((item) => (
        <ShopItem item={item} key={item.id} />
      ))}
    </section>
  );
}
