'use client';
import Link from 'next/link';  // Import Link from next/link
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  return (
    <Link href={`/beverages/${product.id}`}>  {/* Correct the href structure */}
      <div className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 dark:text-white transition-transform transform hover:scale-105 flex flex-col justify-between h-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <div>
          <h3 className="text-lg font-bold mb-2 text-center">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            className="border rounded-md w-16 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
