import styles from "@/components/sign/button/button.module.css";

export default function SignButton({
  onClick,
  content,
}: {
  onClick?: any | null;
  content: string;
}) {
  return (
    <button type="submit" onClick={onClick} className={styles.button}>
      {content}
    </button>
  );
}
