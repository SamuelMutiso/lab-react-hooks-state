import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ category, addToCart }) => {
  // Filter logic
  const filteredProducts = sampleProducts.filter(product => 
    category === "All" || product.category === category
  );

  // Requirement: Display message when no products match
  if (filteredProducts.length === 0) {
    return <p>no products available</p>;
  }

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default ProductList