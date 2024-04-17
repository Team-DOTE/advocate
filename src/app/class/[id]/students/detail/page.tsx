import Title from "@/components/title/title";
import Image from "next/image";
import styles from "@/app/class/[id]/students/detail/page.module.css";

export default function Details() {
  return (
    <div style={{ width: "100%", overflow: "scroll" }}>
      <Title title="학생 관리" />
      <div className={styles.student_head}>
        <Image
          className={styles.profile}
          src={"https://dote-advocate.vercel.app/profile/profile0.png"} //image
          alt="students-img"
          width={48}
          height={48}
        />
        <div className={styles.name_school}>
          <p className={styles.name}>황석준 학생</p>
          <p className={styles.school}>한국디지털미디어고등학교 2학년 4반</p>
        </div>
      </div>
      <div className={styles.student_body}>
        <div className={styles.info_box}>
          <div className={styles.student_info}>
            <p className={styles.info_text_sub}>
              <span className={styles.span}>성별</span>
            </p>
            <p className={styles.info_text}>남성</p>
          </div>
          <div className={styles.student_info}>
            <p className={styles.info_text_sub}>
              <span className={styles.span}>생년월일</span>
            </p>
            <p className={styles.info_text}>2007년 1월 21일 (만 17세)</p>
          </div>
          <div className={styles.student_info}>
            <p className={styles.info_text_sub}>
              <span className={styles.span}>보호자 전화번호</span>
            </p>
            <p className={styles.info_text}>010-1234-5687</p>
          </div>
        </div>
        <div className={styles.info_box}>
          <div className={styles.student_info_2}>
            <p className={styles.info_text_sub}>
              <span className={styles.span}>장애사항</span>
            </p>
            <p className={styles.info_text_2}>
              지체 장애, 정서·행동장애, 자폐성 장애
            </p>
          </div>
        </div>
      </div>
      <div className={styles.student_body}>
        <div className={styles.info_box_2}>
          <div className={styles.student_info_2}>
            <p className={styles.info_text_sub}>
              <span className={styles.span}>특이사항</span>
            </p>
            <div className={styles.info_text_2}>
              황석준 어린이는 나빠요. 황석준 어린이어쩌구
              저쩌구ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
            </div>
          </div>
        </div>
      </div>
      <div className={styles.student_body}>
        <div className={styles.info_box_2}>
          <div className={styles.student_info}>
            <p className={styles.info_text_sub}>
              <span className={styles.span}>학생 ID</span>
            </p>
            <div className={styles.info_text_2}>19029372910</div>
          </div>
        </div>
      </div>
      <div className={styles.student_body}>
        <button className={styles.delete_btn}>학생 삭제</button>
      </div>
    </div>
  );
}
