import styles from "@/components/parent/message/other/other.module.css";

export default function ParentOtherMessage({
  content,
  time,
}: {
  content: string;
  time: string;
}) {
  return (
    <div className={styles.message}>
      <div className={styles.content}>{content}</div>
      <p className={styles.time}>{time}</p>
    </div>
  );
}
