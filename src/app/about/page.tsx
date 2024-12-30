import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-4 mt-16">
      <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 shadow-2xl rounded-2xl max-w-4xl w-full p-10 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-2xl"></div>

        <h1 className="text-5xl font-extrabold text-center mb-8 relative z-10 text-gray-900 dark:text-gray-100">
          About Us
        </h1>
        <p className="text-lg text-center mb-6 relative z-10 text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
          Welcome to <span className="text-blue-600 font-semibold">Tabarak Foods</span>, where we serve delicious meals made with love and the freshest ingredients. Our mission is to provide our customers with an unforgettable dining experience that keeps them coming back for more.
        </p>

        <div className="relative mb-8">
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-60 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <source src="/bout.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="space-y-8 relative z-10">
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Our Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
              Founded in 2022, Tabarak Foods has quickly become a favorite among locals. Our chefs are passionate about creating dishes that not only taste great but also look beautiful. We believe that food is an experience, and we strive to make every meal memorable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
              At Tabarak Foods, our mission is to provide high-quality food and exceptional service. We are committed to using locally sourced ingredients and supporting our community. Our goal is to create a welcoming atmosphere where everyone feels at home.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Visit Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
              We invite you to visit us and experience the flavors of our menu. Whether you&apos;re here for a casual meal with friends or a special celebration, we look forward to serving you!
            </p>
          </section>
        </div>

        <div className="text-center mt-8 relative z-10">
          <Link href="/contact" className="bg-gradient-to-r from-red-500 to-[#4D0011] hover:from-purple-500 hover:to-blue-500 text-white text-lg py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
            Contact Us
          </Link>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>
    </div>
  );
};

export default About;
