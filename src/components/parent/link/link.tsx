import styles from "@/components/parent/link/link.module.css";
import Link from "next/link";

export default function ParentLink({
  content,
  href,
}: {
  content: string;
  href: string;
}) {
  return (
    <Link className={styles.link} href={href}>
      {content}
    </Link>
  );
}
