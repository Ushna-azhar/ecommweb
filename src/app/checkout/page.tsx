'use client';
import React, { useState, useEffect } from 'react';

const CheckoutPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [orderSummary, setOrderSummary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load cart items from localStorage on page load
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setOrderSummary(parsedCart);
        } else {
          console.error('Invalid cart format in localStorage');
        }
      } catch (error) {
        console.error('Error parsing cart data from localStorage', error);
      }
    }
  }, []);

  // Calculate the total amount based on the order summary
  const totalAmount = orderSummary.reduce((total, item) => total + item.quantity * item.price, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const orderData = {
      name,
      email,
      phone,
      address,
      city,
      zipCode,
      cardNumber,
      expiration,
      cvv,
      orderSummary,
      totalAmount,
    };

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful order (e.g., redirect to a confirmation page)
        console.log('Order confirmed:', data);
        // Optionally, redirect to a confirmation page
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-400 text-beige-100 h-screen flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 text-black rounded-lg shadow-lg p-4 w-full max-w-xs font-sans"
      >
        <h1 className="text-center mb-3 text-lg font-bold tracking-wide text-black uppercase">
          Checkout
        </h1>

        {/* Personal Information Section */}
        <h2 className="text-sm mb-2 text-black">Personal Information</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 p-2 border rounded-lg text-sm w-full border-gray-300"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border rounded-lg text-sm w-full border-gray-300"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-2 p-2 border rounded-lg text-sm w-full border-gray-300"
        />

        {/* Shipping Address Section */}
        <h2 className="text-sm mb-2 text-black">Shipping Address</h2>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mb-2 p-2 border rounded-lg text-sm w-full border-gray-300"
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="mb-2 p-2 border rounded-lg text-sm w-full border-gray-300"
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="mb-2 p-2 border rounded-lg text-sm w-full border-gray-300"
        />

        {/* Payment Information Section */}
        <h2 className="text-sm mb-2 text-black">Payment Information</h2>
        <input
          type="text"
          placeholder="Credit Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="mb-2 p-2 border rounded-lg text-sm w-full border-gray-300"
        />
        <input
          type="text"
          placeholder="Expiration Date (MM/YY)"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          className="mb-2 p-2 border rounded-lg text-sm w-full border-gray-300"
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="mb-2 p-2 border rounded-lg text-sm w-full border-gray-300"
        />

        {/* Order Summary Section */}
        <h2 className="text-sm mb-2 text-black">Order Summary</h2>
        <ul className="mb-4 pl-4 text-xs">
          {orderSummary.length > 0 ? (
            orderSummary.map((item, index) => (
              <li key={index} className="mb-1">
                {item.quantity} x {item.name} @ ${item.price.toFixed(2)} each
              </li>
            ))
          ) : (
            <p>No items in cart.</p>
          )}
        </ul>
        <p className="text-xs font-bold">Total: ${totalAmount.toFixed(2)}</p>

        {/* Submit Button */}
        <button
          type="submit"
          className="p-2 rounded-lg bg-black text-beige-100 text-xs font-bold w-full mt-4 transition-colors hover:bg-gray-700"
        >
          {loading ? 'Processing...' : 'Complete Order'}
        </button>

        {error && <p className="text-red-500 mt-4 text-xs">{error}</p>}
      </form>
    </div>
  );
};

export default CheckoutPage;
