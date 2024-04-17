import styles from "@/app/class/[id]/students/page.module.css";
import Title from "@/components/title/title";
import Student from "@/components/student/student";
import Link from "next/link";

export default async function Students() {
  let UserStudents = [
    { name: "황석준1" },
    { name: "황석준2" },
    { name: "황석준3" },
    { name: "황석준4" },
    { name: "황석준4" },
    { name: "황석준4" },
    { name: "황석준4" },
    { name: "황석준4" },
    { name: "황석준4" },
  ];
  return (
    <div style={{ width: "100%", overflow: "scroll" }}>
      <Title title="학생 관리" />
      {UserStudents.map((student1, i) => (
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
