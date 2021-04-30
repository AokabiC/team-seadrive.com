import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonCircle } from "atoms/ButtonCircle";
import React from "react";
import * as Styled from "./styled";

export const SocialLinkList: React.FC = () => {
  return (
    <Styled.Container>
      {items.map((item) => (
        <ButtonCircle key={item.name} onClick={() => window.open(item.link)}>
          <FontAwesomeIcon icon={item.icon} />
        </ButtonCircle>
      ))}
    </Styled.Container>
  );
};

const items = [
  {
    name: "Twitter",
    link: "https://twitter.com/AokabiC",
    icon: faTwitter,
  },
  {
    name: "pixiv",
    link: "https://pixiv.me/aokabic",
    icon: faPaintBrush,
  },
  {
    name: "GitHub",
    link: "https://github.com/AokabiC",
    icon: faGithub,
  },
];
