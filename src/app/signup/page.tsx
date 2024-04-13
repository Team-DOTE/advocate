import styles from "@/app/signup/page.module.css";
import Link from "next/link";

export default function Signup() {
  return (
    <div className={styles.signin}>
      <p className={styles.header}>회원가입</p>
      <form>
        <div className={styles.input_wrap}>
          <p className={styles.explain}>아이디</p>
          <input
            required
            className={styles.input}
            placeholder="아이디를 입력해주세요."
          />
          <p className={styles.explain}>비밀번호</p>
          <input
            required
            className={styles.input}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <p className={styles.explain}>전화번호</p>
          <input
            required
            className={styles.input}
            placeholder="전화번호를 입력해주세요."
          />
          <p className={styles.explain}>학교명</p>
          <input
            required
            className={styles.input}
            placeholder="학교명를 입력해주세요."
          />
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
        <button type="submit" className={styles.button}>
          회원가입
        </button>
      </form>
    </div>
  );
}
