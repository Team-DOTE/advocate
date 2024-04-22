import styles from "@/components/class/student/feature/feature.module.css";

export default function StudentFeature({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className={styles.feature}>
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
