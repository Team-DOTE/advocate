import styles from "@/components/parent/message/date/date.module.css";

export default function ParentMessageDate({ date }: { date: string }) {
  return <p className={styles.date}>{date}</p>;
}
