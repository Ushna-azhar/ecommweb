import React from 'react';

export default function Footer() {
  return (
    <div>
  {/* Newsletter Section */}
<section className="bg-[#4D0011] text-white text-center py-12">
  <h2 className="text-3xl font-semibold mb-4">Stay Updated with Our News</h2>
  <p className="mb-4">Subscribe to our newsletter to get the latest updates on new products and promotions.</p>
  <div className="flex justify-center gap-4 mb-4 items-center">
    <input
      type="email"
      placeholder="Enter your email"
      className="p-3 w-full sm:w-80 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D0011] focus:ring-opacity-50"
    />
    <button className="bg-gray-700 text-white hover:bg-gray-600 transition px-6 duration-300 w-full sm:w-auto rounded-md py-3">
      Subscribe
    </button>
  </div>
</section>

      {/* Footer Section */}
      <footer className="bg-black text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">About Tabarak Foods</h3>
              <p className="text-gray-400">
                Welcome to Tabarak Foods, where we serve delicious and authentic cuisines.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
              <p className="text-gray-400">Email: contact@tabarakfoods.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#menu" className="hover:text-white">Menu</a></li>
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-center text-gray-500">
              &copy; {new Date().getFullYear()} Tabarak Foods. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
