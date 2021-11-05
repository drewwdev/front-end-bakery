import React from "react";

const Form = () => {
  return (
    <div>
      <form className="flex-col py-6 text-gray-600">
        <div className="flex-col">
          <div className="flex-col items-center p-4 sm:flex-row">
            <label className="px-4 text-4xl text-white">Name</label>
            <input
              className="h-12 max-w-6xl px-4 text-2xl border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              type="text"
              id="name"
              placeholder=""
            ></input>
          </div>
          <div className="flex-col items-center p-4 sm:space-x-2 sm:flex-row">
            <label className="px-4 text-4xl text-white">Email</label>
            <input
              className="h-12 max-w-6xl px-4 text-2xl border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
              type="text"
              id="email"
              placeholder=""
            ></input>
          </div>
        </div>
        <div className="flex items-center justify-center p-8">
          <button className="px-6 text-4xl text-white bg-yellow-500 rounded-lg hover:bg-yellow-600">
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
