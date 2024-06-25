import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import PropTypes from "prop-types";

export default function Navbar({ cart }) {
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
      <h2>Cart:{cart.length}</h2>
    </nav>
  );
}

Navbar.propTypes = {
  cart: PropTypes.array.isRequired,
};
