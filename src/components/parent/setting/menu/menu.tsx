import styles from "@/components/parent/setting/menu/menu.module.css";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/../public/icons/arrow-right.svg";

export default function SettingMenu({
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
      <div className={styles.wrap}>
        <Image className={styles.icon} src={icon} alt="setting icon" />
        <p className={styles.title}>{title}</p>
      </div>
      <Image className={styles.arrow} src={arrow} alt="arrow icon" />
    </Link>
  );
}
