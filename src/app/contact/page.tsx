'use client';
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    // You can handle form submission here (e.g., send data to a backend).
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-900 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Our Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.28 6.58a8.488 8.488 0 011.42-1.42m0 0L12 2l8.29 8.29m-8.29-8.29l8.29 8.29m-8.29 0l-8.29 8.29m0 0l1.42-1.42m0 0a8.488 8.488 0 011.42 1.42" />
              </svg>
              <p className="text-lg">1234 Restaurant St, Food City, FC 12345</p>
            </div>

            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 0l2-2-2-2-2 2 2 2zm0 14v2m0 0l-2 2 2 2 2-2-2-2zm0-4v2m0 0l2-2-2-2-2 2 2 2z" />
              </svg>
              <p className="text-lg">+1 (123) 456-7890</p>
            </div>

            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v2h4V4h-4zM4 4h4V2H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V8h-4V6h-4V4H4zm0 16V8h16v12H4z" />
              </svg>
              <p className="text-lg">azhar.danone@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
