import { Link } from "atoms/Link";
import { List, Table } from "atoms/PageTable";
import { NextPage } from "next";
import React from "react";
import { CommonLayout } from "templates/Common";

const WorksPage: NextPage = () => {
  return (
    <CommonLayout>
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
        link: "/compro_with_arisa/",
      },
      {
        text: "銀髪赤眼の後輩と学ぶ競技プログラミング2",
        link: "/compro_with_arisa2/",
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
