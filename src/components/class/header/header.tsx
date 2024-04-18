import styles from "@/components/class/header/header.module.css";

export default function ClassHeader({ content }: { content: string }) {
  return (
    <div>
      <p className={styles.title}>{content}</p>
    </div>
  );
}
