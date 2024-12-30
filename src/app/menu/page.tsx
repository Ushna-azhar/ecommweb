import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-[#4D0011] dark:text-gray-100 tracking-wide relative">
        <span className="inline-block border-b-4 border-[#4D0011] dark:border-gray-100 pb-2">
          Menu
        </span>
      </h1>

      {/* Embedding the Menu Card */}
      <div className="flex justify-center">
        <img
          src="/menu-card.jpg" // Path to the menu card in the public folder
          className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-lg shadow-lg"
          title="Menu Card"
        />
      </div>
    </div>
  );
}
