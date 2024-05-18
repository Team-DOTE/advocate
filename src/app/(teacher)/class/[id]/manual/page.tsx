import styles from "@/app/(teacher)/class/[id]/manual/page.module.css";
import ClassHeader from "@/components/class/header/header";
import ClassWrap from "@/components/class/wrap/wrap";
import Content from "@/components/manual/content/page";
import Search from "@/components/manual/search/page";
import Tag from "@/components/manual/tag/page";
import allContents from "@/utils/getContents";
import { tags } from "@/utils/getTags";

export default function Manual() {
  return (
    <ClassWrap>
      <ClassHeader content="대처 매뉴얼" />
      <div>
        <Search search_content="none" link="first" />
        <div>
          <div style={{ display: "flex" }}>
            {tags.map((tag, index) => (
              <div key={index} style={{ margin: "5px" }}>
                <Tag link={`./manual/tags/${tag.link}`} tag={tag.tag} />
              </div>
            ))}
          </div>
          <div style={{ height: 20 }} />
          {allContents.map((content, index) => (
            <div key={index}>
              <Content
                link={`./manual/contents/${content.slug}`}
                title={content.meta.title}
                tag={content.meta.tag}
              />
            </div>
          ))}
        </div>
      </div>
    </ClassWrap>
  );
}
