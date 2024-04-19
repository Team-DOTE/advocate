import styles from "@/components/navbar/info/class/class.module.css";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/../public/icons/class-arrow.svg";

export default function ClassInfo({
  profile,
  name,
}: {
  profile: string;
  name: string;
}) {
  return (
    <div>
      <div className={styles.class_info}>
        <Image
          width={36}
          height={36}
          src={profile}
          className={styles.class_img}
          alt="profile"
        />
        <p className={styles.class_name}>{name}</p>
        <input type="checkbox" className={styles.toggle} id="class-toggle" />
        <label className={styles.toggle_wrap} htmlFor="class-toggle">
          <Image src={arrow} className={styles.class_icon} alt="arrow icon" />
        </label>
        <div className={styles.modal}>
          <Link className={styles.link} href="/class">
            클래스 목록
          </Link>
        </div>
      </div>
    </div>
  );
}
