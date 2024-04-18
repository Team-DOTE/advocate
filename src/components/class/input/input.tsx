import styles from "@/components/class/input/input.module.css";

export default function ClassInput({
  content,
  name,
  placeholder,
  defaultValue,
  readonly,
}: {
  content: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  readonly?: boolean;
}) {
  return readonly ? (
    <div>
      <p className={styles.content}>{content}</p>
      <input
        className={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
        readOnly
      />
    </div>
  ) : (
    <div>
      <p className={styles.content}>{content}</p>
      <input
        className={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
      />
    </div>
  );
}
