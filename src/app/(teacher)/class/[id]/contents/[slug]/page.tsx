import allContents from "@/utils/getContents";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import styles from "./page.module.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import Tag from "@/components/manual/tag/page";
import { tags } from "@/utils/getTags";
import Link from "next/link";
import ClassWrap from "@/components/class/wrap/wrap";
import ClassHeader from "@/components/class/header/header";

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
  const props = allContents.filter((content) => content.slug == params.slug)[0];
  const link = tags.filter((tag) => tag.tag == props.meta.tag);
  return (
    <ClassWrap>
      <article>
        <div style={{height: 20}}/>
        <Link href={`/class/${params.id}/manual/tags/all`} style={{textDecoration:"none"}}>
          <div style={{ color: "gray" }}>돌아가기</div>
        </Link>
        <div style={{height: 20}}/>
        <div style={{ display: "flex" }}>
          <Tag link={`${link[0].link}`} tag={props.meta.tag} id={params.id}/>
        </div>
        <div className={styles.content}>
          <h1>{props.meta.title}</h1>
          <p>{props.meta.description}</p>

          <MDXRemote source={props.content} options={options} />
        </div>
      </article>
    </ClassWrap>
  );
}
