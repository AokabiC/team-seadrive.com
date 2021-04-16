import React from "react";
import Layout from "src_old/layout";
import Anchor from "src_old/atoms/anchor";
import SEO from "src_old/utils/seo";
import { Ul, Li, Dt, Dd } from "src_old/atoms/list";

const Works: React.FC<any> = ({ data, location }) => {
  const siteTitle = "Works";

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
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <section>
        <dl>
          {items.map((item) => (
            <React.Fragment>
              <Dt> {item.label} </Dt>
              <Dd>
                <Ul>
                  {item.links.map((elm) =>
                    elm.link.indexOf("http") === -1 ? (
                      <Li>
                        <Anchor.In to={elm.link}>{elm.text}</Anchor.In>
                      </Li>
                    ) : (
                      <Li>
                        <Anchor.Ext href={elm.link}>{elm.text}</Anchor.Ext>
                      </Li>
                    )
                  )}
                </Ul>
              </Dd>
            </React.Fragment>
          ))}
        </dl>
      </section>
    </Layout>
  );
};

export default Works;
