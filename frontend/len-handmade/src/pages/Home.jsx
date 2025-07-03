import React from "react";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Sản phẩm 1",
      category: "Thú Bông",
      image: "https://placehold.co/600x400",
      store: {
        name: "Cửa hàng A",
      },
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      category: "Len",
      image: "https://placehold.co/600x400",
      store: {
        name: "Cửa hàng B",
      },
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      category: "Móc Khóa",
      image: "https://placehold.co/600x400",
      store: {
        name: "Cửa hàng C",
      },
    },
    {
      id: 4,
      name: "Sản phẩm 4",
      category: "Túi Xách",
      image: "https://placehold.co/600x400",
      store: {
        name: "Cửa hàng D",
      },
    },
  ];

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-xl shadow p-2">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-cover"
          />
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-sm italic text-gray-400">
            Từ cửa hàng: {product.store.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
