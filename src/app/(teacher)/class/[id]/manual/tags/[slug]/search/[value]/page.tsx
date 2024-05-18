import allContents from "@/utils/getContents";
import { tags } from "@/utils/getTags";
import Link from "next/link";
import Content from "@/components/manual/content/page";

export default function Find({
  params,
}: {
  params: { slug: string; id: string; value: string };
}) {
  const filterTags =
    params.slug === "all"
      ? tags
      : tags.filter((tag) => tag.link == params.slug);
  const filterContents =
    params.slug === "all"
      ? allContents.filter((content) =>
          content.meta.title.includes(decodeURIComponent(params.value))
        )
      : allContents
          .filter((content) => content.meta.tag == filterTags[0].tag)
          .filter((content) =>
            content.meta.title.includes(decodeURIComponent(params.value))
          );

  return (
    <div>
      <Link href="../" style={{ textDecoration: "none" }}>
        <div style={{ color: "gray", margin: "10px" }}>돌아가기</div>
      </Link>
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
