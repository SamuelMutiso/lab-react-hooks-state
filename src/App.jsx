import { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
// Import other components as listed in your lab instructions
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  // 1. Create the 'bin' for dark mode. False = Light, True = Dark.
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    // We use a dynamic className so the CSS can change the background
    <div className={isDarkMode ? "dark-mode-app" : "light-mode-app"}>
      <h1>Shopping App</h1>
      
      {/* 2. Pass the bin and the 'shifter' (setter) to the toggle button */}
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* These will be used in later steps */}
      <Cart />
      <ProductList />
    </div>
  );
}

export default App;