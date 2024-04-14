"use client";

import styles from "@/app/signin/error/page.module.css";
import Link from "next/link";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const useridRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {
    const result = await signIn("credentials", {
      userid: useridRef.current,
      password: passwordRef.current,
      redirect: false,
      callbackUrl: "/",
    });
    if (result?.ok === true) {
      router.push("/");
    } else {
      router.push("/signin/error");
    }
  };

  return (
    <div className={styles.signin}>
      <p className={styles.header}>로그인</p>
      <p className={styles.error}>아이디 혹은 비밀번호가 잘못되었습니다..</p>
      <div className={styles.input_wrap}>
        <input
          ref={useridRef}
          onChange={(e: any) => {
            useridRef.current = e.target.value;
          }}
          name="userid"
          className={styles.input}
          placeholder="아이디를 입력해주세요."
          autoFocus={true}
          autoCapitalize="off"
        />
        <input
          ref={passwordRef}
          onChange={(e: any) => (passwordRef.current = e.target.value)}
          name="password"
          className={styles.input}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <button type="submit" onClick={handleSubmit} className={styles.button}>
        로그인
      </button>
      <div className={styles.link_wrap}>
        <Link className={styles.link} href="/signup">
          회원가입
        </Link>
        <Link className={styles.link} href="#">
          비밀번호 분실
        </Link>
      </div>
    </div>
  );
}
