import React from "react"
import styled from "styled-components"

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;

  li {
    height: 20px;
    padding-right: 0.5rem;
  }
`

export const Share: React.FC = ({ title }: any) => (
  <Container>
    <li>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-text={title + " | "}
        data-lang="en"
        data-show-count="false"
      ></a>
    </li>
    <li>
      <a
        href="https://b.hatena.ne.jp/entry/"
        className="hatena-bookmark-button"
        data-hatena-bookmark-layout="basic-label"
        data-hatena-bookmark-lang="en"
        title="このエントリーをはてなブックマークに追加"
      >
        <img
          src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          width="20"
          height="20"
          style={{ border: "none" }}
        />
      </a>
    </li>
  </Container>
)
