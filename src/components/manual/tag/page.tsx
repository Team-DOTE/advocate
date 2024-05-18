import Link from "next/link";
import styles from "@/components/manual/tag/page.module.css";

interface TagProps {
  link: string;
  tag: string;
  id: string;
  value: any;
}

export default function Tag({ link, tag, id, value }: TagProps) {
  return (
    <div className={styles.tagwrap}>
      {link === "none" ? (
        <div className={styles.tag}>#{tag}</div>
      ) : (
        <Link href={`/class/${id}/manual/tags/${link}/search/${value}`} style={{textDecoration:"none"}}>
          <div className={styles.tag}>#{tag}</div>
        </Link>
      )}
    </div>
  );
}
