import { NextPage } from "next";
import { Hero } from "organisms/Hero";
import React from "react";
import { useIntersection } from "react-use";
import { CommonLayout } from "templates/Common";
import { SEO } from "utils/Seo";

const IndexPage: NextPage = () => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.02,
  });
  return (
    <CommonLayout inverse={!intersection?.isIntersecting ?? false}>
      <SEO />
      <Hero isVisible={!intersection?.isIntersecting ?? false} />
    </CommonLayout>
  );
};
export default IndexPage;
