import styles from "@/app/signup/page.module.css";
import Link from "next/link";

export default function Signup() {
  return (
    <div className={styles.signin}>
      <p className={styles.header}>회원가입</p>
      <form method="POST" action="/api/auth/register">
        <div className={styles.input_wrap}>
          <p className={styles.explain}>아이디</p>
          <input
            required
            name="userid"
            className={styles.input}
            placeholder="아이디를 입력해주세요."
            autoCapitalize="off"
          />
          <p className={styles.explain}>비밀번호</p>
          <input
            required
            name="password"
            className={styles.input}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <p className={styles.explain}>이름</p>
          <input
            required
            name="name"
            className={styles.input}
            placeholder="이름를 입력해주세요."
          />
          <p className={styles.explain}>전화번호</p>
          <input
            required
            name="telephone"
            type="tel"
            className={styles.input}
            placeholder="전화번호를 입력해주세요. (숫자만 작성)"
            pattern="[0-9]"
            minLength={10}
            maxLength={12}
          />
          <p className={styles.explain}>학교명</p>
          <input
            required
            name="school"
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
