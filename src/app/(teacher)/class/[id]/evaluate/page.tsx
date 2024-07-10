import ClassHeader from "@/components/class/header/header";
import ClassLink from "@/components/class/link/link";
import StudentView from "@/components/class/view/student/view";
import ClassWrap from "@/components/class/wrap/wrap";
import { connectDB } from "@/utils/database";

export default async function Evaluate({ params }: { params: { id: string } }) {
  let db = (await connectDB).db("advocate");
  let userStudents = await db
    .collection("student")
    .find({ classid: params.id })
    .sort({ name: 1 })
    .toArray();
  return (
    <ClassWrap>
      <ClassHeader content="성취도 평가" />
      {userStudents.map((student1, index) => (
        <StudentView
          key={index}
          name={student1.name}
          image={student1.profile}
          id={student1._id.toString()}
          classid={params.id}
          link="evaluate"
        />
      ))}
      <ClassLink
        content="평가 항목 추가"
        href={`/class/${params.id}/evaluate/add`}
      />
    </ClassWrap>
  );
}
