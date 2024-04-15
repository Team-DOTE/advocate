import styles from "@/components/class/class.module.css";
import Image from "next/image";
import Link from "next/link";
import profile1 from "@/../public/profile/profile1.png";

export default function Class() {
  return (
    <div className={styles.class}>
      <div className={styles.class_info}>
        <Image className={styles.class_img} src={profile1} alt="class-img" />
        <p className={styles.class_name}>황석준의 클래스</p>
      </div>
      <Link className={styles.class_button} href="">
        입장하기
      </Link>
    </div>
  );
}
