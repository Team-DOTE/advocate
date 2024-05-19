import Link from "next/link";
import styles from "@/components/manual/reference/page.module.css";

interface ContentProps {
  link: string;
  title: string;
  id: string;
}

export default function ReferenceItem({ link, title, id}: ContentProps) {
  return (
    <div>
      <Link
        href={`/class/${id}/contents/references/${link}`}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.content}>{title}</div>
      </Link>
    </div>
  );
}
