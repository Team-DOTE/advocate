"use client";

import styles from "@/app/signin/page.module.css";
import Link from "next/link";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { alert } from "@/utils/alert";
import { toast } from "react-toastify";
import SignButton from "@/components/sign/button/button";
import SignHeader from "@/components/sign/header/header";

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
      callbackUrl: "/signin",
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
      <SignHeader content="로그인" />
      <div className={styles.input_wrap}>
        <input
          className={styles.input}
          name="userid"
          placeholder="아이디를 입력해주세요."
          autoFocus={true}
          ref={useridRef}
          onChange={(e: any) => (useridRef.current = e.target.value)}
        />
        <input
          className={styles.input}
          name="password"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          ref={passwordRef}
          onChange={(e: any) => (passwordRef.current = e.target.value)}
        />
      </div>
      <SignButton onClick={handleSubmit} content="로그인" />
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
