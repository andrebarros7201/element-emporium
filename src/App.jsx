import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import FunctionContext from "./functionContext.js";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  // Get all the products and categories from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch("https://fakestoreapi.com/products"),
          fetch("https://fakestoreapi.com/products/categories"),
        ]);

        if (!response1.ok || !response2.ok) {
          throw new Error("Error fetching data");
        }

        const data1 = await response1.json();
        const data2 = await response2.json();

        setProducts(data1);
        setCategories(data2);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item, quantity) => {
    setCart((prev) => [
      ...prev,
      {
        title: item.title,
        quantity: quantity,
        price: item.price,
        image: item.image,
      },
    ]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const functionRef = useRef(addToCart);

  return (
    <div className="app">
      <FunctionContext.Provider value={{ functionRef }}>
        <Navbar />
        <Outlet context={[products, categories, cart, loading, error]} />
      </FunctionContext.Provider>
    </div>
  );
}

export default App;
