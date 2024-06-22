import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

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

  return (
    <div className="app">
      <Navbar />
      <Outlet context={[products, categories, cart, loading, error]} />
    </div>
  );
}

export default App;
