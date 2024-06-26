"use client";

import styles from "@/components/class/textarea/textarea.module.css";
import { useRef, useState } from "react";

export default function ClassTextarea({
  content,
  placeholder,
  name,
  defaultValue,
}: {
  content: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
}) {
  const [text, setText] = useState("");
  const textarea = useRef(null);

  const resizeHeight = (
    textarea: React.RefObject<HTMLTextAreaElement>,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (textarea.current) {
      textarea.current.style.height = "auto";
      textarea.current.style.height = textarea.current.scrollHeight + "px";
      setText(e.target.value);
    }
  };
  return (
    <div>
      <p className={styles.content}>{content}</p>
      <textarea
        placeholder={placeholder}
        className={styles.textarea}
        ref={textarea}
        onChange={(e) => resizeHeight(textarea, e)}
        name={name}
        defaultValue={defaultValue}
      ></textarea>
    </div>
  );
}
