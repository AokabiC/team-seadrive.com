import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  description?: string;
  image?: string;
  title?: string;
}

export const SEO: React.FC<Props> = ({ description, image, title }) => {
  const router = useRouter();
  const seo = {
    title: title ? `${title} | ${defaultSEO.title} ` : defaultSEO.title,
    description: description || defaultSEO.description,
    image: image || `https://team-seadrive.com${defaultSEO.image}`,
    lang: "ja",
    url: `https://team-seadrive.com${router.asPath}`,
    twitter: "@AokabiC",
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  );
};

const defaultSEO = {
  title: "AokabiC's Portfolio",
  description: "碧黴(あおかび)のサークル team-seadrive.com のWebサイト。",
  image: "/images/ogp_default.png",
};
