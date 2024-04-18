import styles from "@/app/class/[id]/students/page.module.css";
import Link from "next/link";
import { connectDB } from "@/utils/database";
import StudentView from "@/components/class/view/student/view";
import ClassHeader from "@/components/class/header/header";
import ClassWrap from "@/components/class/wrap/wrap";
import ClassLink from "@/components/class/link/link";

export default async function Students() {
  let db = (await connectDB).db("advocate");
  //   let userStudents = await db
  //     .collection("student")
  //     .find({ classid: "" })
  //     .toArray();
  const userStudents = [
    { name: "ㅈㄷㅁ", image: "o" },
    { name: "ㅁㄴㅇ", image: "o" },
    { name: "ㄴㅁㅇㅁ", image: "o" },
  ];
  return (
    <ClassWrap>
      <ClassHeader content="학생 관리" />
      {userStudents.map((student1, i) => (
        <StudentView
          id={"abc"}
          key={i}
          name={student1.name}
          image={"https://dote-advocate.vercel.app/profile/profile0.png"}
        />
      ))}
      <ClassLink content="학생 추가" href="#" />
    </ClassWrap>
  );
}
