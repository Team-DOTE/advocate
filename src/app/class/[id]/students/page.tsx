import styles from "@/app/class/[id]/students/page.module.css";
import Title from "@/components/title/title";
import Student from "@/components/student/student";
import Link from "next/link";
import { connectDB } from "@/utils/database";

export default async function Students() {
  let db = (await connectDB).db("advocate");
  let userStudents = await db
    .collection("student")
    .find({ classid: "" })
    .toArray();
  return (
    <div style={{ width: "100%", overflow: "scroll" }}>
      <Title title="학생 관리" />
      {userStudents.map((student1, i) => (
        <Student
          id={"abc"}
          key={i}
          name={student1.name}
          image={"https://dote-advocate.vercel.app/profile/profile0.png"}
        />
      ))}
      <Link href="" className={styles.add}>
        학생 추가
      </Link>
    </div>
  );
}
