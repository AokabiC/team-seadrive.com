import { SkillCard } from "molecules/SkillCard";
import { NextPage } from "next";
import React from "react";
import { CommonLayout } from "templates/Common";
// import * as Styled from "./styled";

const SkillPage: NextPage = () => {
  return (
    <CommonLayout>
      <SkillCard name="Go" src="golang-icon.svg" value={30} tags={["Echo"]}>
        gogogogo
      </SkillCard>
    </CommonLayout>
  );
};
export default SkillPage;
