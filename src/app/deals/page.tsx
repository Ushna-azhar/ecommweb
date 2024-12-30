'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity?: number; // Optional to accommodate products added to the cart
}

const products: Product[] = [
  { id: 1, name: 'Nihari', price: 10.99, image: '/p1.jpeg', description: 'Delicious Nihari' },
  { id: 2, name: 'Biryani', price: 8.99, image: '/p2.jpg', description: 'Delicious Biryani' },
  { id: 3, name: 'Qorma', price: 12.99, image: '/p3.webp', description: 'Badami Qorma' },
  { id: 4, name: 'Karahi', price: 7.99, image: '/p4.jpg', description: 'Shahi Karahi' },
  { id: 5, name: 'Haleem', price: 14.99, image: '/p5.webp', description: 'Deghi Haleem' },
  { id: 6, name: 'Chicken Pulao', price: 9.99, image: '/p6.jpg', description: 'Delicious Pulao' },
  { id: 7, name: 'Desi Kheer Special', price: 19.99, image: '/p7.jpg', description: 'Kheer' },
  { id: 8, name: 'Desi Zarda Special', price: 4.99, image: '/p8.jpg', description: 'Overloaded Zarda' },
  { id: 9, name: 'Qorma', price: 15.99, image: '/qorma.jpg', description: 'Rich and flavorful Qorma' },
  { id: 10, name: 'Naan', price: 3.99, image: '/naan.jpg', description: 'Soft and fluffy Naan' },
  { id: 11, name: 'Kulcha', price: 4.99, image: '/kul.jpg', description: 'Delicious and warm Kulcha' },
  { id: 12, name: 'Chapati', price: 2.99, image: '/roti.jpg', description: 'Freshly made Chapati' },
  { id: 13, name: 'Cold Drink', price: 1.99, image: '/cd1.jpg', description: 'Chilled and refreshing Cold Drink' },
  { id: 14, name: 'Tea', price: 2.49, image: '/tea1.jpeg', description: 'Refreshing Cold Tea' },
  { id: 15, name: 'Water', price: 0.99, image: '/water.webp', description: 'Pure and fresh Water' },
];

const DealsPage = () => {
  const [cart, setCart] = useState<Product[]>([]); // Use Product[] for cart state

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const calculateTotal = () => {
    const total = cart.reduce((total, item) => {
      const price = parseFloat(item.price.toString());
      const quantity = item.quantity || 0;
      return total + price * quantity;
    }, 0);

    return total.toFixed(2);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-center mb-6 text-[#4D0011] dark:text-gray-100 tracking-tight leading-snug relative">
        <span className="inline-block border-b-4 border-[#4D0011] dark:border-gray-100 pb-2 animate-bounce transition-transform duration-300 ease-in-out">
          Shop All
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Link href={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-110"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{product.name}</h2>
                <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 bg-[#4D0011] text-white py-2 px-6 rounded-lg hover:bg-red-400 transition duration-300"
                >
                  Order Now!
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Your Cart</h2>
          <div className="mt-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-800 dark:text-gray-100">Qty: {item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Total: ${calculateTotal()}
            </p>
            <button
              onClick={() => alert('Proceeding to checkout...')}
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealsPage;
