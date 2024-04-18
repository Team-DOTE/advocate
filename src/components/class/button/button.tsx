import styles from "@/components/class/button/button.module.css";

export default function ClassButton({ content }: { content: string }) {
  return (
    <button type="submit" className={styles.button}>
      {content}
    </button>
  );
}
