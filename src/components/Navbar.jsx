import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/" className={styles.navbarMainLink}>
          Element Emporium
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
      </ul>
      <h2>Cart</h2>
    </nav>
  );
}
