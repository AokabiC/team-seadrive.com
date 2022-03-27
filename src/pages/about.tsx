import { List, Table } from "atoms/PageTable";
import { NextPage } from "next";
import React from "react";
import { CommonLayout } from "templates/Common";
import { SEO } from "utils/Seo";

const AboutPage: NextPage = () => {
  return (
    <CommonLayout>
      <SEO title="About" />
      <Table>
        {biography.map((data) => {
          let content;
          if (typeof data.text === "string") {
            content = data.text;
          } else {
            content = (
              <List>
                {data.text.map((elm) => (
                  <li key={elm}>{elm}</li>
                ))}
              </List>
            );
          }
          return (
            <React.Fragment key={data.label}>
              <dt>{data.label}</dt>
              <dd>{content}</dd>
            </React.Fragment>
          );
        })}
      </Table>
    </CommonLayout>
  );
};
export default AboutPage;

// 略歴をここに書く
// textにArrayを入れるとliになる
const biography = [
  { label: "名前", text: "碧黴(あおかび)" },
  {
    label: "所属",
    text: "株式会社ディー・エヌ・エー(DeNA) ソフトウェアエンジニア",
  },
  {
    label: "略歴",
    text: [
      "2022/04 株式会社ディー・エヌ・エー(DeNA) 入社",
      "2022/03 東北大学大学院 情報科学研究科システム情報科学専攻 中退",
      "2021/03 東北大学 工学部機械知能・航空工学科 卒業",
    ],
  },
  {
    label: "実績(情報関係)",
    text: [
      "2022/01 : ピクシブ株式会社 新卒選考インターンシップ(1week)",
      "2021/09 : ピクシブ株式会社 長期インターンシップ(6weeks)",
      "2021/09 : 株式会社ディー・エヌ・エー(DeNA) インターンシップ(短期ソフトウェアエンジニアリングコース, 2days)",
      "2021/08 : 合同会社DMM.com DMM GUILDインターンシップ(2weeks)",
      "2021/08 : 株式会社アカツキ 就業型インターンシップ(Rails/AWSコース, 3weeks)",
      "2021/03 : ACM-ICPC Asia Yokohama Regional 2020 10位(Aobayama_dropout)",
      "2020/01 : DISCO presents ディスカバリーチャンネルコードコンテスト2020本戦 出場",
      "2019/11 : ACM-ICPC Asia Yokohama Regional 2019 16位(Aobayama_dropout)",
      "2019/11 : ACM-ICPC Asia Bangkok Regional 2019 19位(Aobayama_dropout)",
      "2019/09 : 第一回日本最強プログラマー学生選手権決勝 出場",
      "2019/08 : モイ株式会社 ツイキャスサマーインターンシップ (2weeks)",
      "2018/12 : ACM-ICPC Asia Yokohama Regional 2018 21位(Aobayama_dropout)",
      "2018/11 : CODE THANKS FESTIVAL 2018 出場",
    ],
  },
  {
    label: "実績(イラスト関係)",
    text: [
      "2018/06 : SOUND VOLTEX FLOOR 東方永夜抄アピールカードコンテスト 採用",
    ],
  },
  { label: "資格など", text: ["応用情報技術者 (2019春)"] },
  {
    label: "連絡先",
    text: "team.seadrive[at]gmail.com",
  },
];
