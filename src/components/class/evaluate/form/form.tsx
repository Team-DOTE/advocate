"use client";

import styles from "@/components/class/evaluate/form/form.module.css";
import { alert } from "@/utils/alert";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function EvaluatecontentForm({
  params,
  firstvalue,
  did,
}: {
  params: { id: string; sid: string; eid: string };
  firstvalue: number;
  did: boolean;
}) {
  const [content, setContent] = useState(did ? firstvalue : 0);
  const [url, setUrl] = useState("/api/student/evaluate/edit");
  const router = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success == true) {
      router.push(`/class/${params.id}/evaluate/${params.sid}/${params.eid}`);
      alert.success(did ? "평가가 취소되었습니다." : "평가 완료!");
    } else {
      router.push(`/class/${params.id}/evaluate/add`);
      alert.error(did ? "평가 취소 실패" : "평가 실패!");
    }
  }

  const NumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value: any = event.target.value.replace("%", "");
    setContent(value);
  };

  const gradient = {
    background: `linear-gradient(to right, var(--graph-color) ${content}%, var(--range-color) ${content}%)`,
  };

  return (
    <form onSubmit={onSubmit}>
      <p className={styles.content}>오늘의 성취도</p>
      <div className={styles.input_wrap}>
        <div className={styles.range_wrap}>
          <input
            className={styles.input}
            value={`${content}%`}
            onChange={NumberChange}
            required
            readOnly={did}
          />
          <input
            type="range"
            name="content"
            className={styles.rangeInput}
            min="0"
            max="100"
            value={content}
            onChange={(event: any) => setContent(event.target.value)}
            style={gradient}
            readOnly={did}
            disabled={did}
          />
        </div>
        <input type="hidden" defaultValue={params.id} name="classid" />
        <input type="hidden" defaultValue={params.sid} name="studentid" />
        <input type="hidden" defaultValue={params.eid} name="id" />
        {did ? (
          <button
            type="submit"
            className={styles.button}
            onClick={() => setUrl("/api/student/evaluate/cancel")}
          >
            평가 취소
          </button>
        ) : (
          <button
            type="submit"
            className={styles.button}
            onClick={() => setUrl("/api/student/evaluate/edit")}
          >
            평가
          </button>
        )}
      </div>
    </form>
  );
}
