import styles from "@/app/signin/page.module.css";
import Link from "next/link";

export default function Signin() {
  return (
    <div className={styles.signin}>
      <p className={styles.header}>로그인</p>
      <div className={styles.input_wrap}>
        <input
          name="userid"
          className={styles.input}
          placeholder="아이디를 입력해주세요."
        />
        <input
          name="password"
          className={styles.input}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <button type="submit" className={styles.button}>
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
