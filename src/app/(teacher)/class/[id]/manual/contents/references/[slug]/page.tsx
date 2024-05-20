import allContents from "@/utils/getContents";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import styles from "./page.module.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import Link from "next/link";
import ClassWrap from "@/components/class/wrap/wrap";

const options: any = {
  mdxOptions: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      rehypeSlug,
      rehypeHighlight,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: [styles.anchor],
          },
        },
      ],
    ],
  },
};

export default function Post({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const props = allContents.filter((content) => content.slug == params.slug)[0];

  return (
    <article>
      <div className={styles.header}>
        <h1 className={styles.title}>{props.meta.title}</h1>
        <div className={styles.tag}></div>
      </div>
      <div className={styles.content}>
        <MDXRemote source={props.content} options={options} />
      </div>
      <div style={{ height: 20 }} />
    </article>
  );
}
