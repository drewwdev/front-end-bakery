import React from "react";
import Form from "./Form";
import Title from "./Title";

const Header = () => {
  return (
    <div
      className="object-cover bg-center bg-no-repeat bg-local h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504400739660-22ebeb14f00a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80')`,
      }}
    >
      <div className="flex flex-col items-center justify-center px-24 md:flex-row lg:flex-row">
        <Title />
        <Form />
      </div>
    </div>
  );
};

export default Header;
