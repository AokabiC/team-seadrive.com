import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import Anchor from "src_old/atoms/anchor";

export const LogoImage: React.FC<any> = ({ mobile }) => {
  const data = useStaticQuery(LogoQuery);
  return (
    <Anchor.In to="/">
      <Image
        fixed={
          mobile
            ? data.logoMobile.childImageSharp.fixed
            : data.logo.childImageSharp.fixed
        }
        style={{
          marginRight: 0,
          marginBottom: 0,
        }}
        fadeIn={true}
      />
    </Anchor.In>
  );
};

const LogoQuery = graphql`
  query LogoQuery {
    logo: file(absolutePath: { regex: "/Team_SeAdrive_logo.png/" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    logoMobile: file(absolutePath: { regex: "/Team_SeAdrive_logo.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;
