import React from "react";
import Form from "../components/form";

const LandingPage = () => {
  return (
    <div
      className="object-cover bg-center bg-no-repeat bg-local h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dywxgxp7k/image/upload/v1636049691/front-end-bakery/bg_img_dd3qdx.jpg')`,
      }}
    >
      <div className="flex-col items-center justify-center">
        <p className="font-serif text-8xl text-white">Mia's Bakery</p>
        <Form />
      </div>
    </div>
  );
};

export default LandingPage;
