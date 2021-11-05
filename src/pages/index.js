import React from "react";
import FeaturedCreations from "../components/featuredCreations/FeaturedCreations";
import Header from "../components/Header";
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
    </>
  );
};

export default IndexPage;
