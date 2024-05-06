import styles from "@/components/class/header/header.module.css";

export default function ParentHeader({ content }: { content: string }) {
  return (
    <div>
      <p className={styles.title}>{content}</p>
    </div>
  );
}
