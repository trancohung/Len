import React from "react";

const UserAuthForm = ({ type }) => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/LEN.png')" }}
      ></div>

      <div className="absolute right-[6%] bottom-[10%] w-[55%] h-[50%]">
        <form className="w-full h-full p-6 flex flex-col justify-center items-center">
          <h2 className="text-white text-2xl mb-4">Your Form Title</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded capitalize hover:bg-blue-600"
          >
            {type}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAuthForm;
