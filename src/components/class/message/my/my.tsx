import styles from "@/components/class/message/my/my.module.css";

export default function ClassMyMessage({
  content,
  time,
}: {
  content: string;
  time: string;
}) {
  return (
    <div className={styles.message}>
      <p className={styles.time}>{time}</p>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
