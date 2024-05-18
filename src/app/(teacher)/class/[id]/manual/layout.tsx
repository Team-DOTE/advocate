import styles from "@/app/(teacher)/class/[id]/manual/page.module.css";
import ClassHeader from "@/components/class/header/header";
import ClassWrap from "@/components/class/wrap/wrap";
import Content from "@/components/manual/content/page";
import Search from "@/components/manual/search/page";
import Tag from "@/components/manual/tag/page";
import allContents from "@/utils/getContents";
import { tags } from "@/utils/getTags";


export default function Manual({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  
  return (
    <ClassWrap>
      <ClassHeader content="대처 매뉴얼" />
      <div>
        <Search search_content="none" tag="all" id={params.id} />
        <div>
          <div style={{ height: 20 }} />
          <div style={{ display: "flex" }}>
          {tags.map((tag, index) =>
            tag.tag === "all" ? null : (
              <div key={index} style={{ margin: "5px" }}>
                <Tag link={tag.link} tag={tag.tag} id={params.id} />
              </div>
            )
          )}
        </div>
          {children}
        </div>
      </div>
    </ClassWrap>
  );
}
