import Link from "next/link";
import styles from "@/components/manual/content/page.module.css";
import Tag from "@/components/manual/tag/page";

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
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <Link
      className={styles.content}
      href={`/class/${id}/contents/${link}`}
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
