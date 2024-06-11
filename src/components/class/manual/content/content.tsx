import Link from "next/link";
import styles from "@/components/class/manual/content/content.module.css";
import Tag from "@/components/class/manual/tag/tag";

interface ContentProps {
  link: string;
  title: string;
  tag: string;
  id: string;
  content: any;
}

export default function Content({
  link,
  title,
  tag,
  id,
  content,
}: ContentProps) {
  function removeMdxSyntax(content: string) {
    let result = content.replace(/###.*\n/g, "");
    result = result.replace(/- /g, "");
    result = result.replace(/\d+\.\s/g, "");
    result = result.replace(/\n{2,}/g, "\n");
    result = result.replace(/[<>]/g, "");

    return result;
  }
  const truncateContent = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(5, maxLength) + "...";
    }
    return text.substring(3);
  };
  return (
    <Link
      className={styles.content}
      href={`/class/${id}/manual/contents/${link}`}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.content_head}>
        <div className={styles.title}>{title}</div>
        <Tag link={"none"} tag={tag} id="none" value="all" />
      </div>
      <div className={styles.content_content}>
        {truncateContent(removeMdxSyntax(content), 150)}
      </div>
    </Link>
  );
}
