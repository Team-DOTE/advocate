import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = "contents";
const files = fs.readdirSync(path.join(process.cwd(), postDir));

const allContents = files
  .map((filename) => {
    const fileContent = fs.readFileSync(path.join(postDir, filename), "utf-8");
    const { data: frontMatter, content } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
      content: content,
    };
  })
  .filter((post) => post.meta.tag);

export default allContents;
