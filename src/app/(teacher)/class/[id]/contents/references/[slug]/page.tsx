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
        },
      ],
    ],
  },
};

export default function Post({ params }: any) {
  const props = allContents.filter((content) => content.meta.link == params.slug)[0];
  return (
    <ClassWrap>
      <article>
        <div style={{ height: 20 }} />
        <Link
          href={`/class/${params.id}/manual/tags/all/search/all`}
          style={{ textDecoration: "none" }}
        >
          <div className={styles.back}>돌아가기</div>
        </Link>
        <div style={{ height: 20 }} />
        <div className={styles.content}>
          <h1>{props.meta.title}</h1>
          <p>{props.meta.description}</p>

          <MDXRemote source={props.content} options={options} />
        </div>
      </article>
    </ClassWrap>
  );
}
