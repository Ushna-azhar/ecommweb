import { useParams } from 'react-router-dom';

// Example static product list (replace with actual API or dynamic data if necessary)
const products = [
  { id: 1, name: 'Nihari', price: 10.99, image: '/p1.jpeg', description: 'Delicious Nihari' },
  { id: 2, name: 'Burger', price: 8.99, image: '/p2.jpg', description: 'Juicy Burger' },
  { id: 3, name: 'Pasta', price: 12.99, image: '/p3.webp', description: 'Freshly Made Pasta' },
  { id: 4, name: 'Salad', price: 7.99, image: '/p4.jpg', description: 'Healthy Salad' },
  { id: 5, name: 'Sushi', price: 14.99, image: '/p5.webp', description: 'Sushi Rolls' },
  { id: 6, name: 'Tacos', price: 9.99, image: '/p6.jpg', description: 'Delicious Tacos' },
  { id: 7, name: 'Steak', price: 19.99, image: '/p7.jpg', description: 'Juicy Steak' },
  { id: 8, name: 'Ice Cream', price: 4.99, image: '/p8.jpg', description: 'Creamy Ice Cream' },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>(); // Type safety for the `id` parameter
  const product = products.find((p) => p.id === parseInt(id || '', 10));

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
        <p className="text-gray-600">Please check the URL or return to the product list.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            {product.name}
          </h1>
          <p className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
