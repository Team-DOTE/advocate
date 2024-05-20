import allContents from "@/utils/getContents";
import { tags } from "@/utils/getTags";
import Link from "next/link";
import Content from "@/components/manual/content/page";
import Search from "@/components/manual/search/page";
import Tag from "@/components/manual/tag/page";
import ReferenceItem from "@/components/manual/reference/page";
import styles from "@/app/(teacher)/class/[id]/manual/tags/[slug]/search/[value]/page.module.css";

export default function Find({
  params,
}: {
  params: { slug: string; id: string; value: string };
}) {
  const Reference = allContents.filter((post) => post.meta.tag === "reference");
  const filterTags =
    params.slug === "all"
      ? tags
      : tags.filter((tag) => tag.link == decodeURIComponent(params.slug));
  const filterContents =
    params.slug === "all"
      ? params.value === "all"
        ? allContents.filter((post) => post.meta.tag !== "reference")
        : allContents
            .filter((content) =>
              content.meta.title.includes(decodeURIComponent(params.value))
            )
            .filter((post) => post.meta.tag !== "reference")
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
      <div className={styles.tag_wrap}>
        {tags.map((tag, index) =>
          tag.tag === "all" ? null : (
            <Tag
              key={index}
              link={tag.link}
              tag={tag.tag}
              id={params.id}
              value={params.value}
            />
          )
        )}
      </div>
      {params.value == "all" && params.slug == "all" ? (
        <div>
          <p style={{ fontSize: 24, fontWeight: 500 }}>참고 레퍼런스</p>
          {Reference.map((content, index) => (
            <div key={index}>
              <ReferenceItem
                link={content.meta.link}
                title={content.meta.title}
                id={params.id}
              />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {params.value == "all" && params.slug == "all" ? (
        <p style={{ fontSize: 24, fontWeight: 500 }}>전체 내용</p>
      ) : (
        <p style={{ fontSize: 24, fontWeight: 500, marginBottom: 24 }}>
          검색 된 내용: {filterContents.length}
        </p>
      )}

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
        <div style={{ padding: "10px" }}>검색결과가 존재하지 않습니다.</div>
      )}
    </div>
  );
}
