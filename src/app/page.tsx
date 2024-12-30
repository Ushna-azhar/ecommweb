'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";


export default function Home() {
  // State for theme
  const [theme, setTheme] = useState("light");

  // Persist theme in localStorage and apply to root element
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the root element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Save theme in localStorage
  }, [theme]);

  const products = [
    { image: "nihari.webp", name: "Nihari", description: "Delicious beef stew" },
    { image: "biryani.jpg", name: "Biryani", description: "Flavorful rice dish" },
    { image: "karahi.jpg", name: "Karahi", description: "Spicy chicken curry" },
  ];

  const testimonials = [
    { name: "John Doe", text: "Amazing quality! Will definitely shop again." },
    { name: "Jane Smith", text: "Fantastic experience. Highly recommend!" },
    { name: "Sara Lee", text: "Best shopping experience I've ever had!" },
  ];

  return (
    <div>
      {/* Hero Section with Video and CTA */}
      <div className="relative w-full h-screen">
        <video autoPlay loop muted className="object-cover w-full h-full absolute top-0 left-0">
          <source src="/headerr.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white px-4 md:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-red-800 to-yellow-600 text-transparent bg-clip-text">
                TABARAK
              </span>
              <span className="relative z-10 pl-2">
                <span className="bg-gradient-to-r from-transparent via-white to-transparent text-transparent bg-clip-text">
                  FOODS
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-8">Discover your next favorite product today!</p>
            <Link href="/deals">
              <div className="bg-[#4D0011] hover:bg-red-700 text-white text-lg py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 shadow-lg">
                Shop Now
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group border rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={`/${product.image}`}
                alt={product.name}
                className="w-full h-64 object-cover mb-4 rounded-md group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-500">{product.description}</p>
              <Link href="/product">
                <div className="text-blue-500 hover:underline mt-4 inline-block">View Product</div>
              </Link>
            </div>
          ))}
        </div>
      </section>

 
    </div>
  );
}
