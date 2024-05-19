"use client"
import Link from "next/link";
import styles from "@/components/manual/tag/page.module.css";
import { usePathname } from "next/navigation";

interface TagProps {
  link: string;
  tag: string;
  id: string;
  value: any;
}

export default function Tag({ link, tag, id, value }: TagProps) {
  const pathname = usePathname();
  const path = decodeURIComponent(pathname.split("/")[5]);
  return (
    <div className={styles.tagwrap}>
      {link === "none" ? (
        <div className={styles.image_tag}>#{tag}</div>
      ) : (
        <Link href={`/class/${id}/manual/tags/${link}/search/${value}`} style={{textDecoration:"none"}}>
          <div className={path == link ? styles.tag_selected: styles.tag}>#{tag}</div>
        </Link>
      )}
    </div>
  );
}
