import React from "react";
import { Helmet } from "react-helmet";
import LandingPage from "./landingPage";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mia's Bakery</title>
      </Helmet>
      <LandingPage />
    </>
  );
};

export default IndexPage;
