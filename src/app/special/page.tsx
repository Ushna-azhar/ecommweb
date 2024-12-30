import React from 'react';
import Image from 'next/image';

const dessertProducts = [
  {
    id: 1,
    name: 'Kheer',
    description: 'A traditional dessert made with rice, milk, and cardamom, topped with almonds.',
    image: '/p7.jpg', // Replace with your image path
  },
  {
    id: 2,
    name: 'Zarda',
    description: 'A sweet rice dish made with saffron, sugar, and dry fruits, served as a festive dessert.',
    image: '/p8.jpg', // Replace with your image path
  },
  {
    id: 3,
    name: 'Doodh Dulari',
    description: 'A sweet rice dish made with saffron, sugar, and dry fruits, served as a festive dessert.',
    image: '/p9.jpg', // Replace with your image path
  },
];

const cuisineProducts = [
  {
    id: 1,
    name: 'Nihari',
    description: 'A flavorful slow-cooked beef stew made with spices, served with naan or rice.',
    image: '/p1.jpeg', // Replace with your image path
  },
  {
    id: 2,
    name: 'Biryani',
    description: 'A rich, aromatic rice dish made with meat, spices, and saffron, a popular South Asian dish.',
    image: '/p2.jpg', // Replace with your image path
  },
  {
    id: 3,
    name: 'Karahi',
    description: 'A spicy chicken curry cooked in a wok-like pan, perfect with naan or rice.',
    image: '/p3.webp', // Replace with your image path
  },
];

export default function OurSpecial() {
  return (
    <div className="py-12 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      {/* Our Special Desserts Section */}
      <h1 className="text-5xl font-bold text-center mb-6 text-[#4D0011] dark:text-gray-100 tracking-tight leading-snug relative">
        <span
          className="inline-block border-b-4 border-[#4D0011] dark:border-gray-100 pb-2 animate-bounce transition-transform duration-300 ease-in-out"
        >
          Special Desserts
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dessertProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={700} // Adjust width as needed
              height={700} // Adjust height as needed
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Special Cuisines Section */}
      <h1 className="text-5xl font-bold text-center mb-6 text-[#4D0011] dark:text-gray-100 tracking-tight leading-snug relative mt-12">
        <span
          className="inline-block border-b-4 border-[#4D0011] dark:border-gray-100 pb-2 animate-bounce transition-transform duration-300 ease-in-out"
        >
          Special Cuisines
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cuisineProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={700} // Adjust width as needed
              height={700} // Adjust height as needed
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
