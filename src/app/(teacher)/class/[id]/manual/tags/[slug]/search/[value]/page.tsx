import allContents from "@/utils/getContents";
import { tags } from "@/utils/getTags";
import Link from "next/link";
import Content from "@/components/manual/content/page";
import Search from "@/components/manual/search/page";
import Tag from "@/components/manual/tag/page";

export default function Find({
  params,
}: {
  params: { slug: string; id: string; value: string };
}) {
  const filterTags =
    params.slug === "all"
      ? tags
      : tags.filter((tag) => tag.link == decodeURIComponent(params.slug));
  const filterContents =
    params.slug === "all"
      ? params.value === "all"
        ? allContents
        : allContents.filter((content) =>
            content.meta.title.includes(decodeURIComponent(params.value))
          )
      : params.value === "all"
      ? allContents.filter((content) => content.meta.tag == filterTags[0].tag)
      : allContents
          .filter((content) => content.meta.tag == filterTags[0].tag)
          .filter((content) =>
            content.meta.title.includes(decodeURIComponent(params.value))
          );

  return (
    <div>
      <Search search_content={params.value} tag={params.slug} id={params.id} />
      <div style={{ height: 20 }} />
      <div style={{ display: "flex" }}>
        {tags.map((tag, index) =>
          tag.tag === "all" ? null : (
            <div key={index} style={{ margin: "5px" }}>
              <Tag
                link={tag.link}
                tag={tag.tag}
                id={params.id}
                value={params.value}
              />
            </div>
          )
        )}
      </div>
      {params.value == "all" && params.slug == "all" ? null : (
        <Link
          href={`/class/${params.id}/manual/tags/all/search/all`}
          style={{ textDecoration: "none" }}
        >
          <div style={{ color: "gray", margin: "10px" }}>돌아가기</div>
        </Link>
      )}
      <div style={{ height: 20 }} />
      <div style={{ margin: "10px", fontSize: "20px" }}>
        검색 된 내용 : {filterContents.length}
      </div>
      <div style={{ height: 20 }} />
      {filterContents.length !== 0 ? (
        filterContents.map((content, index) => (
          <div key={index}>
            <Content
              link={content.slug}
              title={content.meta.title}
              tag={content.meta.tag}
              id={params.id}
              content={content.content}
            />
          </div>
        ))
      ) : (
        <div>찾으시는 결과가 없네요ㅠ</div>
      )}
      <div style={{ height: 20 }} />
    </div>
  );
}
