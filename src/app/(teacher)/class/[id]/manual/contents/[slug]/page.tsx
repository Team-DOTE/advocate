import allContents from "@/utils/getContents";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import styles from "./page.module.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import Tag from "@/components/class/manual/tag/tag";
import { tags } from "@/utils/getTags";

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

export default function Post({ params }: any) {
  const props = allContents.filter((content) => content.slug == params.slug)[0];
  const link = tags.filter((tag) => tag.tag == props.meta.tag);
  return (
    <article>
      <div className={styles.header}>
        <h1 className={styles.title}>{props.meta.title}</h1>
        <div className={styles.tag}></div>
        <Tag
          link={`${link[0].link}`}
          tag={props.meta.tag}
          id={params.id}
          value="all"
        />
      </div>
      <p className={styles.source}>출처: {props.meta.source}</p>
      <div className={styles.content}>
        <MDXRemote source={props.content} options={options} />
      </div>
      <div style={{ height: 20 }} />
    </article>
  );
}
