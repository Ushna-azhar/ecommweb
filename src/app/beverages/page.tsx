'use client';
import React, { useState } from 'react';

const products = {
  beverages: [
    { id: 1, name: 'Cola Next', description: 'Refreshing Drink.', image: '/cd1.jpg' },
    { id: 2, name: 'Tea', description: 'Refreshing herbal tea.', image: 'tea1.jpeg' },
    { id: 3, name: 'Fizzup', description: 'Sparkling fizzy drink.', image: 'cdd.jpeg' },
  ],
  others: [
    { id: 4, name: 'Tandoor', description: 'Tandoor bread.', image: 'naan.jpg' },
    { id: 5, name: 'Chapati', description: 'Traditional flatbread.', image: 'roti.jpg' },
    { id: 6, name: 'Kulcha', description: 'Soft and delicious bread.', image: 'kul.jpg' },
  ],
};

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  return (
    <div className="border rounded-lg shadow-md p-4 w-full max-w-xs bg-white dark:bg-gray-800 dark:text-white transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold mb-2 text-center">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">{product.description}</p>
      <div className="flex items-center justify-between mt-4">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
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
  );
};

const Page = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 dark:text-white text-center">Beverages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-1">
            <ProductCard product={products.beverages[0]} />
          </div>
          {products.beverages.slice(1).map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-4 dark:text-white text-center">Others</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.others.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
