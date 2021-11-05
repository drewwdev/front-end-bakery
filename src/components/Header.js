import React from "react";
import Title from "./Title";

const Header = () => {
  return (
    <div
      className="flex items-center justify-center object-cover w-full h-screen bg-local bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504400739660-22ebeb14f00a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80')`,
      }}
    >
      <div className="items-center justify-center sm:flex sm:px-12">
        <Title />
      </div>
    </div>
  );
};

export default Header;
