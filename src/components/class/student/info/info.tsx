import styles from "@/components/class/student/info/info.module.css";
import React from "react";

export default function StudentInfo({
  title,
  content,
}: {
  title: string;
  content: string | React.ReactNode;
}) {
  return (
    <div className={styles.info}>
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
