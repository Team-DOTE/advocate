import Link from "next/link";
import styles from "@/components/manual/tag/page.module.css";

interface TagProps {
  link: string;
  tag: string;
}

export default function Tag({ link, tag }: TagProps) {
  return (
    <div className={styles.tagwrap}>
      {link === "none" ? (
        <div className={styles.tag}>#{tag}</div>
      ) : (
        <Link href={`${link}`} style={{textDecoration:"none"}}>
          <div className={styles.tag}>#{tag}</div>
        </Link>
      )}
    </div>
  );
}
