import React from "react"
import SEO from "@/components/atoms/seo"
import Layout from "@/components/layout"
import { Ul, Dt, Dd, Li } from "@/components/atoms/list"

// TODO: https://qiita.com/Takepepe/items/144209f860fbe4d5e9bb で型を縛る
const About: React.FC<any> = ({ location }) => {
  const siteTitle = "About"

  // 略歴をここに書く
  // textにArrayを入れるとliになる
  const biography = [
    { label: "名前", text: "碧黴(あおかび)" },
    {
      label: "所属",
      text: "東北大学工学部 機械知能・航空工学科 4年 (2017/04 入学)",
    },
    {
      label: "略歴(情報関係)",
      text: [
        "2020/01 : DISCO presents ディスカバリーチャンネルコードコンテスト2020本戦 出場",
        "2019/11 : ACM-ICPC Asia Yokohama Regional 2019 16位(Aobayama_dropout)",
        "2019/11 : ACM-ICPC Asia Bangkok Regional 2019 19位(Aobayama_dropout)",
        "2019/09 : 第一回日本最強プログラマー学生選手権決勝 出場",
        "2019/08 : モイ株式会社 ツイキャスサマーインターンシップ 参加",
        "2018/12 : ACM-ICPC Asia Yokohama Regional 2018 21位(Aobayama_dropout)",
        "2018/11 : CODE THANKS FESTIVAL 2018 出場",
      ],
    },
    {
      label: "略歴(イラスト関係)",
      text: [
        "2018/06 : SOUND VOLTEX FLOOR 東方永夜抄アピールカードコンテスト 採用",
      ],
    },
    { label: "資格など", text: ["応用情報技術者 (2019春)"] },
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <section>
        <dl>
          {biography.map(data => {
            let content
            if (typeof data.text === "string") {
              content = data.text
            } else {
              content = (
                <Ul>
                  {data.text.map(elm => (
                    <Li>{elm}</Li>
                  ))}
                </Ul>
              )
            }
            return (
              <>
                <Dt>{data.label}</Dt>
                <Dd>{content}</Dd>
              </>
            )
          })}
        </dl>
      </section>
    </Layout>
  )
}

export default About
