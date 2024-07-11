"use client";

import styles from "@/components/class/evaluate/form/form.module.css";
import { useState } from "react";

export default function EvaluatecontentForm({
  params,
  firstvalue,
  did,
}: {
  params: { id: string; sid: string; eid: string };
  firstvalue: number;
  did: boolean;
}) {
  const [content, setContent] = useState((did)?firstvalue:0);
  const [actionUrl, setActionUrl] = useState("/api/student/evaluate/edit");
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value: any = event.target.value.replace("%", "");
    setContent(value);
  };
  return (
    <form action={actionUrl} method="POST">
      <p className={styles.content}>오늘의 성취도</p>
      <div className={styles.input_wrap}>
        <div className={styles.range_wrap}>
          <input
            className={styles.input}
            value={`${content}%`}
            onChange={handleNumberChange}
            required
          />
          <input
            type="range"
            name="content"
            className={styles.rangeInput}
            min="0"
            max="100"
            value={content}
            onChange={(event: any) => setContent(event.target.value)}
          />
        </div>
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
        {did ? (
          <button type="submit" className={styles.button} onClick={()=>setActionUrl("/api/student/evaluate/cancel")}>
          평가 취소
          </button>
        ) : (
          <button type="submit" className={styles.button} onClick={()=>setActionUrl("/api/student/evaluate/edit")}>
            평가
          </button>
        )}
      </div>
    </form>
  );
}
