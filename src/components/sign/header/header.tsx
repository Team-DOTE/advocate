import styles from "@/components/sign/header/header.module.css";

export default function SignHeader({ content }: { content: string }) {
  return <p className={styles.header}>{content}</p>;
}
