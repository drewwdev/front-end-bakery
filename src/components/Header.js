import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";

import Title from "./Title";

const Header = () => {
  const { hero } = useStaticQuery(graphql`
    query MyQuery {
      hero: file(name: { eq: "hero-img" }) {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <BackgroundImage
      {...convertToBgImage(hero.childImageSharp.gatsbyImageData)}
      className="flex items-center justify-center object-cover w-full h-screen bg-local bg-center bg-no-repeat"
    >
      <div className="items-center justify-center sm:flex sm:px-12">
        <Title />
      </div>
    </BackgroundImage>
  );
};

export default Header;
