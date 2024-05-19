import styles from "@/app/(parent)/students/page.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ParentHeader from "@/components/parent/header/header";
import ParentLink from "@/components/parent/link/link";
import StudentView from "@/components/parent/view/student/view";
import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";

export default async function Students() {
  const session: any = await getServerSession(authOptions);
  let db = (await connectDB).db("advocate");
  let userStudents = await db
    .collection("student")
    .find({ telephone: session.user.user.telephone })
    .toArray();
  return (
    <div>
      <ParentHeader content="학생 관리" />
      {userStudents.map((student1, index) => (
        <StudentView
          key={index}
          name={student1.name + " 학생"}
          image={student1.profile}
          id={student1._id.toString()}
        />
      ))}
    </div>
  );
}
