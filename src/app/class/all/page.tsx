import styles from "@/app/class/all/page.module.css";
import Class from "@/components/class/class";
import Title from "@/components/title/title";
import Link from "next/link";

export default function AllClass() {
  return (
    <div className={styles.all_class}>
      <Title title="클래스 관리" />
      <div className={styles.class_wrap}>
        <Link className={styles.class_add} href="/class/add">
          클래스 추가
        </Link>
        <Class />
        <Class />
      </div>
    </div>
  );
}
