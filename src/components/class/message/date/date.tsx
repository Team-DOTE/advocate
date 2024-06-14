import styles from "@/components/class/message/date/date.module.css";

export default function ClassMessageDate({ date }: { date: string }) {
  return <p className={styles.date}>{date}</p>;
}
