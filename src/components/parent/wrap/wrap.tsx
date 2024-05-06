import styles from "@/components/parent/wrap/wrap.module.css";

export default function ParentWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.wrap}>{children}</div>;
}
