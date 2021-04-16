import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Anchor from "src_old/atoms/anchor";

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);
  const { author, social } = data.site.siteMetadata;

  return (
    <Base>
      <BioImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <div>
        <p>
          <Anchor.Ext href={`https://twitter.com/${social.twitter}`}>
            碧黴(あおかび)
          </Anchor.Ext>
        </p>
        <p>Illustrator, Competitive programmer</p>
      </div>
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;

const BioImage = styled(Image)`
  margin-bottom: 0;
  margin-right: 1rem;
  max-width: 80px;
  border-radius: 50%;
  flex-grow: 1;
`;

export default Bio;
