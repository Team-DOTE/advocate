"use client";

import styles from "@/app/(teacher)/class/[id]/students/add/page.module.css";
import ClassButton from "@/components/class/button/button";
import ClassHeader from "@/components/class/header/header";
import ClassInput from "@/components/class/input/input";
import ClassTextarea from "@/components/class/textarea/textarea";
import ClassWrap from "@/components/class/wrap/wrap";
import { alert } from "@/utils/alert";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";

export default function AddStudent({ params }: { params: { id: string } }) {
  const router = useRouter();

  const { data: session, status } = useSession();
  var now = new Date();
  var seconds = now.getSeconds();
  var profile;
  const domain = "https://dote-advocate.vercel.app/profile/";
  if (seconds % 3 == 0) {
    profile = domain + "profile0.png";
  } else if (seconds % 3 == 1) {
    profile = domain + "profile1.png";
  } else if (seconds % 3 == 2) {
    profile = domain + "profile2.png";
  }

  const [inputValue, setInputValue] = useState("");
  const handlePress = (e: any) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };
  useEffect(() => {
    if (inputValue.replace(/-/g, "").length === 10) {
      setInputValue(
        inputValue
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
      );
    }
    if (inputValue.replace(/-/g, "").length === 11) {
      setInputValue(
        inputValue
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
    if (inputValue.replace(/-/g, "").length <= 8) {
      setInputValue(inputValue.replace(/-/g, ""));
    }
  }, [inputValue]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/student/add", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success == true) {
      alert.success("학생 추가가 완료되었습니다.");
      router.push(`/class/${params.id}/students`);
    } else {
      alert.error("학생 추가가 실패했습니다.");
      router.push(`/class/${params.id}/students`);
    }
  }

  return (
    <ClassWrap>
      <ClassHeader content="학생 추가" />
      <div className={styles.container}>
        <form onSubmit={onSubmit}>
          <ClassInput
            content="이름을 입력해주세요."
            name="name"
            placeholder="이름을 입력해주세요."
          />
          <ClassInput
            content="생년월일을 입력해주세요."
            name="birthdate"
            placeholder="YYYY년 M월 D일 (2007년 1월 1일)"
          />
          <ClassInput
            content="학교명을 입력해주세요."
            name="school"
            placeholder="학교명을 입력해주세요."
          />
          <ClassInput
            content="학년, 반, 번호를 입력해주세요."
            name="studentid"
            placeholder="G학년 C반 N번 (2학년 4반 27번)"
          />
          <p className={styles.content}>성별을 선택해주세요.</p>
          <select
            required
            className={styles.select}
            name="sex"
            defaultValue={""}
          >
            <option value="" disabled hidden>
              성별
            </option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
          <p className={styles.content}>보호자 전화번호를 입력해주세요.</p>
          <input
            required
            name="telephone"
            type="text"
            className={styles.input}
            placeholder="010-1234-5678 (-없이 입력)"
            onChange={handlePress}
            value={inputValue}
          />
          <ClassInput
            content="장애사항을 입력해주세요."
            name="disability"
            placeholder="장애사항을 알려주세요."
          />
          {/* <textarea
            placeholder="특이사항을 입력해주세요."
            className={styles.textarea}
            ref={textarea}
            value={text}
            onChange={(e) => resizeHeight(textarea, e)}
            name="significant"
          ></textarea> */}
          <ClassTextarea
            content="특이사항을 입력해주세요."
            placeholder="특이사항을 입력해주세요."
            name="significant"
          />
          <ClassInput
            content="학생 사진 주소를 입력해주세요."
            name="profile"
            placeholder="학생 사진 주소를 입력해주세요."
            defaultValue={profile}
          />
          <input
            style={{ display: "none" }}
            name="teacher"
            defaultValue={session?.user?.user?._id?.toString()}
          />
          <input
            style={{ display: "none" }}
            name="classid"
            defaultValue={params.id}
          />
          <ClassButton content="학생 추가" />
        </form>
      </div>
    </ClassWrap>
  );
}
