"use client";

import styles from "@/components/class/student/delete/delete.module.css";
import { alert } from "@/utils/alert";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function StudentDelete({ id }: { id: string }) {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/student/delete", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success == true) {
      alert.success("학생 삭제가 완료되었습니다.");
      router.push(`/class/${path}/students`);
    } else {
      alert.error("학생 삭제가 실패했습니다.");
      router.push(`/class/${path}/students`);
    }
  }
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  return (
    <form onSubmit={onSubmit}>
      <input style={{ display: "none" }} name="id" value={id} />
      <button type="submit" className={styles.button}>
        학생 삭제
      </button>
    </form>
  );
}
