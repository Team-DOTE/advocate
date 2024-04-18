"use client";

import styles from "@/app/signup/page.module.css";
import SignButton from "@/components/sign/button/button";
import SignHeader from "@/components/sign/header/header";
import SignInput from "@/components/sign/input/input";
import SignLabel from "@/components/sign/label/label";
import { alert } from "@/utils/alert";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Signup() {
  const params = useSearchParams();
  useEffect(() => {
    if (params.get("error") === "true") {
      alert.error("해당 아이디는 이미 사용중입니다.");
    }
  });
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
  return (
    <div className={styles.signin}>
      <SignHeader content="회원가입" />
      <form method="POST" action="/api/auth/register">
        <div className={styles.input_wrap}>
          <SignLabel content="아이디" />
          <SignInput
            name="userid"
            placeholder="아이디를 입력해주세요."
            autoFocus={true}
          />
          <SignLabel content="비밀번호" />
          <SignInput
            name="password"
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
          <SignLabel content="이름" />
          <SignInput name="name" placeholder="이름을 입력해주세요." />
          <SignLabel content="전화번호" />
          <input
            required
            name="telephone"
            type="text"
            className={styles.input}
            placeholder="010-1234-5678 (-없이 입력)"
            onChange={handlePress}
            value={inputValue}
          />
          <SignLabel content="학교명" />
          <SignInput name="school" placeholder="학교명을 입력해주세요." />
          <div className={styles.radio_wrap}>
            <input
              required
              className={styles.radio}
              type="radio"
              name="role"
              value="teacher"
            />
            선생님
            <input
              required
              className={styles.radio}
              type="radio"
              name="role"
              value="parent"
            />
            보호자
          </div>
          <div className={styles.radio}>
            <input
              required
              className={styles.radio}
              type="radio"
              name="accept"
              value="true"
            />
            <Link className={styles.link} href="">
              advocate 이용약관
            </Link>
            을 읽었으며, 이에 동의합니다.
          </div>
        </div>
        <SignButton content="회원가입" />
      </form>
      <div style={{ height: "100px" }}></div>
    </div>
  );
}
