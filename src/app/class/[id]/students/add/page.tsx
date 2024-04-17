"use client";

import styles from "@/app/class/add/page.module.css";
import Title from "@/components/title/title";
import { useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";

export default function AddStudent() {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const { data: session, status } = useSession();
  if (session === null) {
    redirect("/signin");
  }
  var now = new Date();
  var seconds = now.getSeconds();
  var profile;
  const domain = "https://dote-advocate.vercel.app/profile/";
  if (seconds % 3 == 0) {
    profile = domain + "profile0.png";
  } else if (seconds % 3 == 1) {
    profile = domain + "profile1.png";
  } else if (seconds % 3 == 2) {
    profile = domain + "profile2.png";
  }

  return (
    <div style={{ width: "100%", overflow: "scroll" }}>
      <Title title="학생 추가" />
      <div className={styles.container}>
        <form method="POST" action="/api/student/add">
          <p className={styles.content}>이름을 입력해주세요.</p>
          <input
            placeholder="이름을 입력해주세요."
            className={styles.input}
            name="name"
          />
          <p className={styles.content}>생년월일을 입력해주세요</p>
          <input
            placeholder="20070121"
            className={styles.input}
            name="birthdate"
          />
          <p className={styles.content}>학교명을 입력해주세요</p>
          <input
            placeholder="학교명을 입력해주세요."
            className={styles.input}
            name="shcool"
          />
          <p className={styles.content}>학번을 입력해주세요</p>
          <input
            placeholder="학번을 입력해주세요."
            className={styles.input}
            name="studentid"
          />
          <p className={styles.content}>성별을 입력해주세요</p>
          <input
            placeholder="성별을 입력해주세요."
            className={styles.input}
            name="sex"
          />
          <p className={styles.content}>보호자 전화번호를 입력해주세요</p>
          <input
            placeholder="보호자 전화번호를 입력해주세요."
            className={styles.input}
            name="telephone"
          />
          <p className={styles.content}>장애사항을 입력해주세요</p>
          <input
            placeholder="장애사항을 입력해주세요."
            className={styles.input}
          />
          <p className={styles.content}>특이사항을 입력해주세요</p>
          <input
            placeholder="특이사항을 입력해주세요."
            className={styles.input}
            name="significant"
          />
          <p className={styles.content}>학생 프로필 사진</p>
          <input
            placeholder="프로필 사진 주소를 입력해주세요."
            className={styles.input}
            name="profile"
            defaultValue={profile}
          />
          <input
            style={{ display: "none" }}
            name="teacher"
            defaultValue={session?.user?.user?._id?.toString()}
          />
          <input
            style={{ display: "none" }}
            name="classid"
            defaultValue={path}
          />
          <button type="submit" className={styles.button}>
            학생 추가
          </button>
        </form>
      </div>
    </div>
  );
}
