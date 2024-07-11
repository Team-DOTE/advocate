"use client"

import styles from "@/components/class/evaluate/form/form.module.css";
import { useState } from "react";

export default function EvaluatecontentForm({
  params, firstvalue
}: {
  params: { id: string; sid: string; eid: string };
  firstvalue:number;
}) {
  const[content, setContent] = useState(firstvalue);
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value:any = event.target.value.replace('%', ''); // '%' 기호를 제거
    setContent(value);
  };
  return (
    <form action="/api/student/evaluate/edit" method="POST">
      <p className={styles.content}>오늘의 성취도</p>
      <div className={styles.input_wrap}>
        <input type="range" name="content" className={styles.rangeInput} min="0" max="100" value={content} onChange={(event:any) => setContent(event.target.value)} />
        <input className={styles.input} value={`${content}%`} onChange={handleNumberChange} required />
        <input
          style={{ display: "none" }}
          defaultValue={params.id}
          name="classid"
        />
        <input
          style={{ display: "none" }}
          defaultValue={params.sid}
          name="studentid"
        />
        <input
          style={{ display: "none" }}
          defaultValue={params.eid}
          name="id"
        />
        <button type="submit" className={styles.button}>
          평가
        </button>
      </div>
    </form>
  );
}
