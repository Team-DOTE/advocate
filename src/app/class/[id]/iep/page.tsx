import styles from "@/app/class/[id]/iep/page.module.css";
import Title from "@/components/title/title";

export default function Iep() {
  return (
    <div style={{ width: "100%" }}>
      <Title title="IEP 생성" />
      <div className={styles.container}>
        <form method="POST" action="">
          <p className={styles.content}>IEP 생성 대상 학생을 선택해주세요.</p>
          <input placeholder="학생을 선택해주세요." className={styles.input} />
          <p className={styles.content}>IEP 생성 과목을 선택해주세요.</p>
          <input placeholder="과목을 선택해주세요." className={styles.input} />
          <p className={styles.content}>
            해당 과목에 대한 대상 학생의 현행 수준을 자세히 작성해주세요.
          </p>
          <input
            placeholder="학생의 특성을 자세히 작성해주세요."
            className={styles.input}
          />
          <p className={styles.content}>
            해당 과목의 교육 목적 및 기대 효과를 작성해주세요.
          </p>
          <input
            placeholder="학습 목적 및 기대 효과를 작성해주세요."
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            과목 추가
          </button>
        </form>
      </div>
    </div>
  );
}
