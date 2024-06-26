import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className={styles.home}>
      <h2>ELEMENT EMPORIUM</h2>
      <Link to={"shop"} className={styles["home-button"]}>
        Go to shop
      </Link>
    </section>
  );
}
