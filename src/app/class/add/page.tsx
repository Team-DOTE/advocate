"use client";

import styles from "@/app/class/add/page.module.css";
import Title from "@/components/title/title";
import { useState } from "react";

export default function AddClass() {
  return (
    <div>
      <Title title="클래스 생성" />
      <div className={styles.container}>
        <p className={styles.content}>클래스 이름을 설정해주세요.</p>
        <input placeholder="학생을 선택해주세요." className={styles.input} />
        <p className={styles.content}>클래스 생성자 ID</p>
        <input readOnly className={styles.input} />
        <p className={styles.content}>클래스 프로필 사진</p>
        <input
          placeholder="프로필 사진 주소를 입력해주세요."
          className={styles.input}
        />
      </div>
    </div>
  );
}
