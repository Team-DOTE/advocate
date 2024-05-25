import styles from "@/components/parent/message/my/my.module.css";

export default function ParentMyMessage({
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
