import styles from "@/app/(parent)/settings/info/page.module.css";
import Image from "next/image";
import logo from "@/../public/logo.png";
import ParentHeader from "@/components/parent/header/header";
import Link from "next/link";

export default function SettingInfo() {
  return (
    <div>
      <ParentHeader content="정보" />
      <Image className={styles.logo} src={logo} alt="logo" />
      <Link
        href="https://github.com/team-dote/advocate"
        className={styles.name}
      >
        advocate
      </Link>
      <p className={styles.version}>v 1.0.0</p>
    </div>
  );
}
