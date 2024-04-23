import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/app/report/[sid]/page.module.css";
import ClassButton from "@/components/class/button/button";
import ClassHeader from "@/components/class/header/header";
import ClassTextarea from "@/components/class/textarea/textarea";
import ClassWrap from "@/components/class/wrap/wrap";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function StudentReport({
  params,
}: {
  params: { sid: string };
}) {
  const session: any = await getServerSession(authOptions);
  if (session === null) {
    redirect("/signin");
  }
  let db = (await connectDB).db("advocate");
  let student = await db
    .collection("student")
    .find({ _id: new ObjectId(params.sid) })
    .toArray();
  let report = await db
    .collection("report")
    .find({ student: params.sid })
    .toArray();

  return (
    <ClassWrap>
      <ClassHeader content={`${student[0].name} 학생의 기초 정보`} />
      <form
        method="POST"
        action={
          student[0].report
            ? "/api/student/report/update"
            : "/api/student/report/add"
        }
      >
        <p>
          {student[0].report}{" "}
          {student[0].report
            ? "/api/student/report/update"
            : "/api/student/report/add"}
        </p>
        <ClassTextarea
          content="1. 적응행동"
          placeholder="학생이 일상생활에서 먹기, 입고 벗기, 화장실 사용 등의 기술을 얼마나 잘 수행하는지 설명해주세요."
          name="adaption"
          defaultValue={report[0]?.adaption || ""}
        />
        <ClassTextarea
          content="2. 운동성"
          placeholder="학생이 대근육과 소근육을 사용하여 걷기, 뛰기, 이동하기, 놀이도구 사용, 사물조작능력, 도구사용능력 등을 얼마나 잘 수행하는지 설명해주세요."
          name="exercise"
          defaultValue={report[0]?.exercise || ""}
        />
        <ClassTextarea
          content="3. 사회성"
          placeholder="학생의 인사하기, 기다리기, 규칙 지키기, 감정 표현하기와 이해하기, 놀이 등의 능력을 얼마나 잘 수행하는지 설명해주세요"
          name="sociality"
          defaultValue={report[0]?.sociality || ""}
        />
        <ClassTextarea
          content="4. 인지"
          placeholder="학생이 나이에 적절한 또래와 동일한 행동에 대한 수행능력, 사물의 비교, 특징(크기, 양, 색) 등의 개념 이해능력을 얼마나 잘 보여주는지 설명해주세요."
          name="recognition"
          defaultValue={report[0]?.recognition || ""}
        />
        <ClassTextarea
          content="5. 의사소통"
          placeholder="학생의 언어 이해력과 표현력 수준을 설명해주세요."
          name="communication"
          defaultValue={report[0]?.communication || ""}
        />
        <ClassTextarea
          content="6. 문제행동"
          placeholder="학생이 보여주는 부적응 행동의 양상과 행동발생의 장소와 상황을 설명해주세요."
          name="problem"
          defaultValue={report[0]?.problem || ""}
        />
        <ClassTextarea
          content="7. 가족특성"
          placeholder="가족의 강점과 욕구, 그리고 가족이 가장 바라는 학생의 발달 지도사항에 대해 설명해주세요."
          name="family"
          defaultValue={report[0]?.family || ""}
        />
        <ClassTextarea
          content="8. 비고"
          placeholder="추가적으로 문의 사항이나 관심사가 있으시면 자유롭게 작성해주세요."
          name="postscript"
          defaultValue={report[0]?.postscript || ""}
        />
        <input
          style={{ display: "none" }}
          name="student"
          defaultValue={params.sid}
        />
        <ClassButton content="저장" />
      </form>
    </ClassWrap>
  );
}
