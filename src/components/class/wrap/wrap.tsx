import styles from "@/components/class/wrap/wrap.module.css";

export default function ClassWrap({ children }: { children: React.ReactNode }) {
  return <div className={styles.wrap}>{children}</div>;
}
