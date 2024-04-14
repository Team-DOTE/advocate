"use client";

import styles from "@/app/signin/page.module.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { alert } from "@/utils/alert";
import { toast } from "react-toastify";

export default function Signin() {
  const router = useRouter();
  const useridRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {
    alert.loading("로딩중", { autoClose: false });
    const result = await signIn("credentials", {
      userid: useridRef.current,
      password: passwordRef.current,
      redirect: false,
      callbackUrl: "/",
    });
    if (result?.ok === true) {
      toast.dismiss();
      router.push("/");
      alert.success("로그인에 성공하였습니다.");
    } else {
      toast.dismiss();
      router.push("/");
      alert.error("아이디 혹은 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className={styles.signin}>
      <p className={styles.header}>로그인</p>
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
