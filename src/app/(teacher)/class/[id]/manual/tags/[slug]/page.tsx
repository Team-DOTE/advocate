import allContents from "@/utils/getContents";
import { tags } from "@/utils/getTags";
import Link from "next/link";
import { unescape } from "querystring";
import Tag from "@/components/manual/tag/page";
import Content from "@/components/manual/content/page";
import Search from "@/components/manual/search/page";
import ClassWrap from "@/components/class/wrap/wrap";
import ClassHeader from "@/components/class/header/header";

export default function Tags({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const filterTags =
    params.slug === "all"
      ? tags
      : tags.filter((tag) => tag.link == unescape(params.slug));
  const filterContents =
    params.slug === "all"
      ? allContents
      : allContents.filter(
          (content) => content.meta.tag == unescape(filterTags[0].tag)
        );
  return (
    <div>
      <Link href="../tags/all" style={{ textDecoration: "none" }}>
        {params.slug === "all" ? null : (
          <div style={{ color: "gray", margin: "10px" }}>돌아가기</div>
        )}
      </Link>
      <div style={{ height: 20 }} />
      <div style={{ margin: "10px", fontSize: "20px" }}>
        검색 된 내용 : {filterTags[0].count}
      </div>
      <div style={{ height: 20 }} />
      {filterContents.map((content, index) => (
        <div key={index}>
          <Content
            link={`../contents/${content.slug}`}
            title={content.meta.title}
            tag={content.meta.tag}
            id={params.id}
          />
        </div>
      ))}
    </div>
  );
}
