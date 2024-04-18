import styles from "@/components/sign/label/label.module.css";

export default function SignLabel({ content }: { content: string }) {
  return <p className={styles.label}>{content}</p>;
}
