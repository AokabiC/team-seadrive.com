import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { readdirRecursive } from "utils/readdirRecursive";

// import { BlogPost, BlogPostContent } from "./BlogPost";

export const postsDirectory = path.join(process.cwd(), "content");

export const getAllPosts = async () => {
  const paths = await readdirRecursive(postsDirectory, [".md"]);
  const slugs = paths.map((p) =>
    p
      .replace(postsDirectory, "")
      .replace("index.md", "")
      .split("/")
      .filter((s) => s.length > 0)
  );
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostContent(slug))
  );
  return posts;
};

export const getPostContent = async (slug: Array<string>): Promise<Post> => {
  const postPath = path.join(postsDirectory, ...slug, "index.md");
  const source = fs.readFileSync(postPath, "utf8");
  const { content, data } = matter(source);

  const postFrontmatter: PostFrontmatter = {
    tags: data["tags"] ?? [],
    date: data["date"] ?? "1970-01-01T00:00:00.000Z",
    description: data["description"] ?? "",
  };

  return {
    slug,
    frontmatter: postFrontmatter,
    content,
  };
};

interface PostFrontmatter {
  tags: Array<string>;
  date: string;
  description: string;
}

export interface Post {
  slug: Array<string>;
  frontmatter: PostFrontmatter;
  content: string;
}
