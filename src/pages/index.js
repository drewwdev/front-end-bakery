import React from "react";
import FeaturedCreations from "../components/FeaturedCreations";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mia's Bakery</title>
      </Helmet>
      <Header />
      <FeaturedCreations />
      <Footer />
    </>
  );
};

export default IndexPage;
