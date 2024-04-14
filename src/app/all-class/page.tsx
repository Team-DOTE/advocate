import styles from "@/app/all-class/page.module.css";
import Image from "next/image";
import profile0 from "@/../public/profile/profile0.png";

export default function AllClass() {
  return (
    <div className={styles.all_class}>
      <button className={styles.class_add}>클래스 추가</button>
      <div className={styles.class}>
        <div style={{ display: "flex" }}>
          <Image src={profile0} className={styles.class_img} alt="class_img" />
          <p className={styles.class_name}>김진호님의 클래스</p>
        </div>
        <div></div>
        <button className={styles.class_button}>입장하기</button>
      </div>
    </div>
  );
}
