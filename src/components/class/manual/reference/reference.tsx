import Link from "next/link";
import styles from "@/components/class/manual/reference/reference.module.css";

interface ContentProps {
  link: string;
  title: string;
  id: string;
}

export default function ReferenceItem({ link, title, id }: ContentProps) {
  return (
    <Link
      className={styles.content}
      href={`/class/${id}/manual/contents/references/${link}`}
      style={{ textDecoration: "none" }}
    >
      {title}
    </Link>
  );
}
