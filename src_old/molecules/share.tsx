import React from "react";
import styled from "styled-components";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Color from "src_old/utils/color";

export const Share: React.FC<any> = ({ title }) => {
  const isSupportWebShareAPI =
    typeof navigator !== `undefined` && navigator.share;
  return (
    <Container>
      {isSupportWebShareAPI && (
        <li>
          <ShareButton
            onClick={() => {
              navigator.share({ url: location.href });
            }}
          >
            <FontAwesomeIcon icon={faShareAlt} />
          </ShareButton>
        </li>
      )}
      <li>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-text={title}
          data-lang="en"
          data-show-count="false"
        ></a>
      </li>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
  }
`;

const ShareButton = styled.div`
  background: ${Color.primary_dark};
  padding: 0 0.4rem;
  border-radius: 3px;
  font-size: 0.7rem;
  color: white;
  &:after {
    content: "Share";
    padding-left: 0.4rem;
  }
`;
