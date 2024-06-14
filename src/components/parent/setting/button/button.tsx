import styles from "@/components/parent/setting/button/button.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SettingButton({
  href,
  icon,
  title,
}: {
  href: string;
  icon: any;
  title: string;
}) {
  return (
    <Link className={styles.link} href={href}>
      <Image className={styles.icon} src={icon} alt="setting icon" />
      <p className={styles.title}>{title}</p>
    </Link>
  );
}
