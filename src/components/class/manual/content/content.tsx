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
        {truncateContent(content, 150)}
      </div>
    </Link>
  );
}
