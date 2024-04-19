import styles from "@/app/class/[id]/students/page.module.css";
import Link from "next/link";
import { connectDB } from "@/utils/database";
import StudentView from "@/components/class/view/student/view";
import ClassHeader from "@/components/class/header/header";
import ClassWrap from "@/components/class/wrap/wrap";
import ClassLink from "@/components/class/link/link";

export default async function Students({ params }: { params: { id: string } }) {
  let db = (await connectDB).db("advocate");
  let userStudents = await db
    .collection("student")
    .find({ classid: params.id })
    .toArray();

  return (
    <ClassWrap>
      <ClassHeader content="학생 관리" />
      {userStudents.map((student1, i) => (
        <StudentView
          key={i}
          name={student1.name}
          image={student1.profile}
          id={student1._id.toString()}
          classid={params.id}
        />
      ))}
      <ClassLink
        content="학생 추가"
        href={`/class/${params.id}/students/add`}
      />
    </ClassWrap>
  );
}
