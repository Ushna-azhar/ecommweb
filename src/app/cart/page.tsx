'use client';
import React, { useState, useEffect } from 'react';
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/20/solid'; // Importing correct icons
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'; // Corrected path for Heroicons v2

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the page loads
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Add or update item in the cart
  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.id === newItem.id);
      if (itemIndex === -1) {
        // Item doesn't exist in cart, so add it with initial quantity 1
        const updatedItems = [...prevItems, { ...newItem, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        return updatedItems;
      } else {
        // Item exists in cart, update the quantity
        const updatedItems = prevItems.map((item, index) => 
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        return updatedItems;
      }
    });
  };

  // Update the quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Avoid invalid quantities
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item // Ensure quantity is at least 1
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove an item from the cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate the total price
  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price); // Ensure price is a number
      const quantity = item.quantity ? parseInt(item.quantity, 10) : 0; // Ensure quantity is a number
      if (isNaN(price) || isNaN(quantity)) {
        return total; // Skip invalid items by returning the previous total
      }
      return total + price * quantity;
    }, 0);

    return isNaN(total) ? '0.00' : total.toFixed(2); // Ensure it never returns NaN
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center mt-10">
          {/* Empty cart icon with a stylish container */}
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-full shadow-xl mb-4">
            <ShoppingCartIcon className="w-24 h-24 text-gray-500 dark:text-gray-300" />
          </div>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-4">
            Your cart is empty. Let's get you some goodies!
          </p>
          <button
            onClick={() => alert('Taking you to the shop...')}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <Link href='/deals'>
            Start Shopping</Link>
          </button>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded object-cover" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                >
                  <MinusIcon className="w-5 h-5" />
                </button>
                <div className="w-10 h-10 bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded-full flex items-center justify-center mx-2">
                  {item.quantity}
                </div>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                >
                  <PlusIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500"
                >
                  <TrashIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-6">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">Total: ${calculateTotal()}</p>
            <button
              onClick={() => alert('Proceeding to checkout...')}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              <Link href='checkout'>
              Checkout</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
