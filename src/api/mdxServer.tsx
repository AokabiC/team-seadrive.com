import { CodeBlock } from "atoms/CodeBlock";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import path from "path";
import React from "react";

interface MarkdownImgProps {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
}

export const hydrate = (
  source: MDXRemoteSerializeResult,
  slug: Array<string>
) => {
  return (
    <MDXRemote
      {...source}
      components={{
        img: (props: MarkdownImgProps) => {
          const imgSrc = path.join("/content/", ...slug, props.src);
          return <Image {...props} src={imgSrc} />;
        },
        code: CodeBlock,
      }}
    />
  );
};
