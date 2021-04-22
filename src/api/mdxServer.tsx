import { default as nmrHydrate } from "next-mdx-remote/hydrate";
import { default as nmrRenderToString } from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import Image from "next/image";
import path from "path";
import React from "react";

interface MarkdownImgProps {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
}

const componentsBuilder = (slug: Array<string>): MdxRemote.Components => ({
  components: {
    img: (props: MarkdownImgProps) => {
      const imgSrc = path.join("/content/", ...slug, props.src);
      return <Image {...props} src={imgSrc} />;
    },
  },
});

export const hydrate = (
  source: MdxRemote.Source,
  slug: any
): React.ReactNode => {
  const components = componentsBuilder(slug);
  return nmrHydrate(source, components);
};

export const renderToString = (
  source: string,
  slug: Array<string>
): Promise<MdxRemote.Source> => {
  const components = componentsBuilder(slug);
  return nmrRenderToString(source, components);
};
