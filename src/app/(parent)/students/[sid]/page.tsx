import styles from "@/app/(parent)/students/[sid]/page.module.css";
import ParentHeader from "@/components/parent/header/header";
import StudentFeature from "@/components/parent/student/feature/feature";
import StudentInfo from "@/components/parent/student/info/info";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

export default async function StudentDetail({
  params,
}: {
  params: { sid: string };
}) {
  let db = (await connectDB).db("advocate");
  let student = await db
    .collection("student")
    .find({ _id: new ObjectId(params.sid) })
    .toArray();

  const report: boolean = student[0].report;
  function BasicReport() {
    if (report === true) {
      return (
        <Link className={styles.report} href={`/report/${params.sid}`}>
          보기
        </Link>
      );
    } else {
      return (
        <Link className={styles.report} href={`/report/${params.sid}`}>
          없음 (작성하기)
        </Link>
      );
    }
  }

  return (
    <div>
      <ParentHeader content="학생 관리" />
      <Image
        className={styles.profile}
        src={student[0].profile}
        alt="student profile"
        width={150}
        height={150}
      />
      <p className={styles.name}>{student[0].name + " 학생"}</p>
      <p className={styles.school}>{student[0].school}</p>
      <p className={styles.studentid}>{student[0].studentid}</p>
      <StudentInfo title="성별" content={student[0].sex} />
      <StudentInfo title="생년월일" content={student[0].birthdate} />
      <StudentInfo title="전화번호" content={student[0].telephone} />
      <StudentFeature title="장애사항" content={student[0].disability} />
      <StudentFeature title="특이사항" content={student[0].significant} />
      <StudentInfo title="ID" content={student[0]._id.toString()} />
      <div style={{ height: "32px" }} />
    </div>
  );
}
