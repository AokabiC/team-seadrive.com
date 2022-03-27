import { NextPage } from "next";
import { Hero } from "organisms/Hero";
import React from "react";
import { CommonLayout } from "templates/Common";
import { SEO } from "utils/Seo";

const IndexPage: NextPage = () => {
  return (
    <CommonLayout inverse={true}>
      <SEO />
      <Hero isVisible={true} />
    </CommonLayout>
  );
};
export default IndexPage;
