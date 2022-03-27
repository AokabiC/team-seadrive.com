import { Link } from "atoms/Link";
import { List, Table } from "atoms/PageTable";
import { NextPage } from "next";
import React from "react";
import { CommonLayout } from "templates/Common";
import { SEO } from "utils/Seo";

const WorksPage: NextPage = () => {
  return (
    <CommonLayout>
      <SEO title="Works" />
      {items.map((item) => (
        <Table key={item.label}>
          <dt> {item.label} </dt>
          <dd>
            <List>
              {item.links.map((e) => (
                <li key={e.link}>
                  <Link href={e.link} external={e.link.indexOf("http") != -1}>
                    {e.text}
                  </Link>
                </li>
              ))}
            </List>
          </dd>
        </Table>
      ))}
    </CommonLayout>
  );
};
export default WorksPage;

const items = [
  {
    label: "書籍サポート",
    links: [
      {
        text: "銀髪赤眼の後輩と学ぶ競技プログラミング",
        link: "https://scrapbox.io/aokabic/%E3%80%8E%E9%8A%80%E9%AB%AA%E8%B5%A4%E7%9C%BC%E3%81%AE%E5%BE%8C%E8%BC%A9%E3%81%A8%E5%AD%A6%E3%81%B6%E7%AB%B6%E6%8A%80%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%80%8F%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%83%9A%E3%83%BC%E3%82%B8",
      },
      {
        text: "銀髪赤眼の後輩と学ぶ競技プログラミング2",
        link: "https://scrapbox.io/aokabic/%E3%80%8E%E9%8A%80%E9%AB%AA%E8%B5%A4%E7%9C%BC%E3%81%AE%E5%BE%8C%E8%BC%A9%E3%81%A8%E5%AD%A6%E3%81%B6%E7%AB%B6%E6%8A%80%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B02%E3%80%8F%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%83%9A%E3%83%BC%E3%82%B8",
      },
    ],
  },
  {
    label: "通販サイト",
    links: [
      {
        text: "BOOTH",
        link: "https://team-seadrive.booth.pm",
      },
      {
        text: "メロンブックス",
        link: "https://www.melonbooks.co.jp/circle/index.php?circle_id=41118",
      },
    ],
  },
];
