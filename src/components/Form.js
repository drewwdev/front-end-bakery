import React from "react";

const Form = () => {
  return (
    <div>
      <form className="py-6 text-gray-600 flex-col">
        <div className="flex-col">
          <div className="flex-col items-center p-4 sm:flex-row">
            <label className="text-white text-4xl px-4">Name</label>
            <input
              className="max-w-6xl h-12 px-4 rounded text-2xl border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              type="text"
              id="name"
              placeholder=""
            ></input>
          </div>
          <div className="flex-col items-center p-4 sm:space-x-2 sm:flex-row">
            <label className="text-white text-4xl px-4">Email</label>
            <input
              className="max-w-6xl h-12 px-4 rounded text-2xl border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              type="text"
              id="email"
              placeholder=""
            ></input>
          </div>
        </div>
        <div className="flex justify-center items-center p-8">
          <button className="bg-yellow-500 text-white rounded-lg px-6 text-4xl hover:bg-yellow-600">
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
