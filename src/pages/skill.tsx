import { ContentsHeading } from "atoms/ContentsHeading";
import { SkillCard } from "molecules/SkillCard";
import { NextPage } from "next";
import React from "react";
import { CommonLayout } from "templates/Common";
import { SEO } from "utils/Seo";

const SkillPage: NextPage = () => {
  return (
    <CommonLayout>
      <SEO title="Skill" />
      <ContentsHeading>Languages</ContentsHeading>
      <SkillCard
        name="TypeScript"
        src="/ts-icon.png"
        value={60}
        tags={["React", "Next.js", "Storybook"]}
      >
        Reactに関連したWebフロントエンドフレームワークでの開発で使っています。このポートフォリオサイトはNext.jsで構築しました。AtCoder
        ProblemsのフロントエンドにContributeしたり、趣味のWebアプリ開発でStorybookを用いたSnapShot
        Testなどを導入したりもしました。
      </SkillCard>
      <SkillCard
        name="Python"
        src="/python-icon.png"
        value={70}
        tags={["PyTorch", "Flask", "pytest", "Poetry"]}
      >
        研究(コンピュータビジョン)、AWS
        LambdaなどのFaaSを用いたWebサイトクローラやTwitter
        botなどの小規模なアプリ開発を経験しています。スタートアップ企業での開発アルバイトでも書いています。
      </SkillCard>
      <SkillCard name="Golang" src="/go-icon.png" value={40} tags={["Echo"]}>
        趣味でAPIサーバーの開発に利用しています。言語仕様がシンプルかつ必要十分で書き方に悩むことが少なく、Clean
        Architectureとの相性が良いとも感じるので最近気に入っている言語です。
      </SkillCard>
      <SkillCard
        name="Rust"
        src="/rust-icon.png"
        value={20}
        tags={["Actix-web"]}
      >
        一通り学んで、トレイトやパターンマッチングでのエラー処理などの関数型言語の影響を受けた言語機能が新鮮で洗練されていると感じた言語です。書く際にロジック以外に考慮すべき事項が多く、良くも悪くもパフォーマンス志向のシステムプログラミング言語だなぁという印象。
      </SkillCard>
      <SkillCard name="HTML / CSS" src="/html5-icon.png" value={70}>
        CSS
        Animationが好きで、このサイトのすべてのアニメーションに用いられています。最近はWeb
        Accessibilityに興味があります。
      </SkillCard>
      <ContentsHeading>DevOps</ContentsHeading>
      <SkillCard name="Version Control" tags={["Git", "GitHub"]}></SkillCard>
      <SkillCard name="CI / CD" tags={["GitHubActions", "Docker"]}>
        Docker /
        Docker-Composeを使って開発環境を立てることが多いです。テストやLint
        Checkを導入する際はGitHub Actionsを利用しています。
      </SkillCard>
      <SkillCard
        name="Development Method"
        tags={["GitHubFlow", "CleanArchitecture"]}
      >
        Clean
        Architectureなどのドメイン駆動設計やテスト・変更に強い開発手法に興味があり、実際に趣味のアプリのバックエンドAPIサーバーの開発に用いています。
      </SkillCard>
      <SkillCard
        name="Platform as a Service"
        tags={["AWS Lambda", "Firebase Auth"]}
      >
        あまり経験はないです。競技プログラミングのコンテスト情報をクロールしTweetするbotをLambdaで運用しています。
      </SkillCard>
      <ContentsHeading>Speciality</ContentsHeading>
      <SkillCard
        name="Computer Vision"
        tags={["Self-Supervised Representation Learning"]}
      ></SkillCard>
    </CommonLayout>
  );
};
export default SkillPage;
