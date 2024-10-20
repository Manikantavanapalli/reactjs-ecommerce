import React from 'react';

const Homepage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$29.99',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$49.99',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$19.99',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Chimki's Store</h1>

          <nav>
            <a href="#" className="mr-6 hover:text-gray-300">Home</a>
            <a href="#" className="mr-6 hover:text-gray-300">Shop</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Chimki's Store. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
