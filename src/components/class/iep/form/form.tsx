"use client";

import styles from "@/components/class/iep/form/form.module.css";
import { alert } from "@/utils/alert";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import ClassInput from "@/components/class/input/input";
import ClassButton from "@/components/class/button/button";

export default function IepForm({
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
      alert.success("IEP 생성이 완료되었습니다.");
    } else {
      router.push(`/class/${params.id}/iep`);
      alert.error("IEP 생성이 실패했습니다.");
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <p className={styles.content}>IEP 생성 대상 학생을 선택해주세요.</p>
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
        content="IEP 생성 과목을 입력해주세요."
        name="subject"
        placeholder="IEP 생성 과목을 선택해주세요."
      />
      <ClassInput
        content="선택한 과목에 대한 학생의 현행 수준을 자세히 작성해주세요."
        name="level"
        placeholder="선택한 과목에 대한 학생의 현행 수준을 자세히 작성해주세요."
      />
      <ClassInput
        content="교육 목적 및 기대 효과를 작성해주세요."
        name="purpose"
        placeholder="교육 목적 및 기대 효과를 작성해주세요."
      />
      <input
        style={{ display: "none" }}
        defaultValue={params.id}
        name="classid"
      />
      <ClassButton content="IEP 생성" />
    </form>
  );
}
