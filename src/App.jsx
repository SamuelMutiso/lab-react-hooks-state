import { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // STEP 3 & 4: States for Cart and Category
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  // Function to add item name to cart array
  const addToCart = (productName) => {
    setCart([...cart, productName]);
  };

  return (
    <div className={isDarkMode ? "dark-mode-app" : "light-mode-app"}>
      <h1>Shopping App</h1>
      
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* STEP 4: Category Filter Dropdown */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Pass cart state to Cart component */}
      <Cart cart={cart} />
      
      {/* Pass category and addToCart function to ProductList */}
      <ProductList category={category} addToCart={addToCart} />
    </div>
  );
}

export default App;