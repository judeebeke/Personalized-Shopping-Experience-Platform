// src/components/Recommendations.js
import React from 'react';
import useGlobalStore from '../store/useStore';

const Recommendations = () => {
    const { products, user } = useGlobalStore();
  
    const recommendedProducts = products.filter(product => {
      // Simple recommendation logic based on user gender
   
      if (user.gender === 'male') {
        return product.category === "men's clothing";
      } else {
        return product.category === "women's clothing";
      }
    });

    if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
    <h2 className="text-3xl font-bold mb-6 text-center">Recommended Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recommendedProducts.map(product => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <img className="w-full h-64 object-cover rounded-t-lg" src={product.image} alt={product.title} />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Recommendations;
