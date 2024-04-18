import styles from "@/components/class/link/link.module.css";
import Link from "next/link";

export default function ClassLink({
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
