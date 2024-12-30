'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.error('Product ID is missing!');
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch product with id: ${id}`);
        }

        const data: Product = await response.json();

        if (!data) {
          throw new Error(`Product with id: ${id} not found!`);
        }

        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = (newItem: Product) => {
    let savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemIndex = savedCart.findIndex((item: Product) => item.id === newItem.id);

    if (itemIndex === -1) {
      savedCart.push(newItem);
    } else {
      savedCart[itemIndex].quantity += 1;
    }

    localStorage.setItem('cart', JSON.stringify(savedCart));
    alert('Product added to cart');
  };

  if (loading) return <div className="text-center py-12 text-2xl font-bold">Loading...</div>;

  if (!product) return <div className="text-center py-12 text-2xl font-bold">Product not found!</div>;

  return (
    <div className="container mx-auto py-8 px-4 rounded-xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center mb-6 md:mb-0 animate__animated animate__fadeIn animate__delay-1s">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-lg object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 tracking-wide transform hover:translate-x-2 transition-all duration-500">
            {product.name}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{product.description}</p>
          <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            className="px-8 py-3 bg-[#4D0011] hover:bg-red-600 text-white rounded-lg text-lg font-semibold shadow-md transform transition-all duration-300 ease-in-out hover:scale-110 hover:translate-y-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
