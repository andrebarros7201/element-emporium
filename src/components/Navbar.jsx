import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}
