import Tag from "@/components/manual/tag/page";
import allContents from "@/utils/getContents";
import { tags } from "@/utils/getTags";
import Link from "next/link";
import Content from "@/components/manual/content/page";
import Search from "@/components/manual/search/page";
import ClassWrap from "@/components/class/wrap/wrap";
import ClassHeader from "@/components/class/header/header";

export default function Find({ params }: any) {
  const filterContents = allContents.filter((content) =>
    content.meta.title.includes(decodeURIComponent(params.slug))
  );

  return (
    <ClassWrap>
      <ClassHeader content="대처 매뉴얼" />
      <div>
        <Search search_content={params.slug} />
        <div style={{ display: "flex" }}>
          {tags.map((tag, index) => (
            <div key={index} style={{ margin: "5px" }}>
              <Tag link={`../tags/${tag.link}`} tag={tag.tag} />
            </div>
          ))}
        </div>
        <Link href="../" style={{textDecoration:"none"}}>
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
                link={`../contents/${content.slug}`}
                title={content.meta.title}
                tag={content.meta.tag}
              />
            </div>
          ))
        ) : (
          <div>찾으시는 결과가 없네요ㅠ</div>
        )}
        <div style={{ height: 20 }} />
      </div>
    </ClassWrap>
  );
}
