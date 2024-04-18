import styles from "@/components/sign/input/input.module.css";

export default function SignInput({
  name,
  placeholder,
  type,
  autoFocus,
  pattern,
  onChange,
}: {
  name: string;
  placeholder: string;
  type?: string | null;
  autoFocus?: boolean | null;
  pattern?: string | null;
  onChange?: any | null;
}) {
  return (
    <input
      className={styles.input}
      name={name}
      placeholder={placeholder}
      type={type ? type : ""}
      autoFocus={autoFocus ? autoFocus : false}
      autoCapitalize="off"
      required
      pattern={pattern ? pattern : undefined}
      onChange={onChange}
    />
  );
}
