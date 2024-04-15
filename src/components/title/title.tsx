import styles from "@/components/title/title.module.css";

export default function Title({ title }: { title: string }) {
  return (
    <div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}
