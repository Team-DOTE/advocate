"use client";

import styles from "@/components/class/iep/form/form.module.css";
import { alert } from "@/utils/alert";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import ClassInput from "@/components/class/input/input";
import ClassButton from "@/components/class/button/button";

export default function AssesmentForm({
  params,
  userStudents,
}: {
  params: { id: string };
  userStudents: any[];
}) {
  const router = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/student/iep/add", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success == true) {
      router.push(
        `/class/${params.id}/iep/result/${data.iepdata._id.toString()}`
      );
      alert.success("평가가 완료되었습니다.");
    } else {
      router.push(`/class/${params.id}/iep`);
      alert.error("평가에 실패했습니다.");
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <p className={styles.content}>평가 대상 학생을 선택해주세요.</p>
      <select
        required
        className={styles.select}
        name="student"
        defaultValue={""}
      >
        <option value="" disabled hidden>
          학생 목록
        </option>
        {userStudents.map((student, index) => (
          <option value={student._id} key={index}>
            {student.name} 학생
          </option>
        ))}
      </select>
      <ClassInput
        content="앞으로 평가할 주제를 입력해주세요."
        name="subject"
        placeholder="앞으로 평가할 주제를 입력해주세요."
      />
      <p className={styles.content}>평가 종료 날짜를 정해주세요.</p>
      <input
          className={styles.date}
          type="date"
          name="birthdate"
          required
      />
      


      <input
        style={{ display: "none" }}
        defaultValue={params.id}
        name="classid"
      />
      <ClassButton content="평가 주제 추가" />
    </form>
  );
}
