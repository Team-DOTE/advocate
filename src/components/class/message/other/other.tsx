import styles from "@/components/class/message/other/other.module.css";

export default function ClassOtherMessage({
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
