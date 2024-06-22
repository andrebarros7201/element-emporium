import styles from "../styles/shop.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function ShopItem({ item }) {
  return (
    <div className={styles.shopItem}>
      <Link to={`product/${item.id}`}>
        <img src={item.image} alt={item.title} />
        <div>
          <h2>{item.title}</h2>
          <h2>{item.price}€</h2>
        </div>
      </Link>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};
