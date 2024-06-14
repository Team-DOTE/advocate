import styles from "@/app/(teacher)/class/[id]/students/[sid]/page.module.css";
import ClassHeader from "@/components/class/header/header";
import StudentDelete from "@/components/class/student/delete/delete";
import StudentFeature from "@/components/class/student/feature/feature";
import StudentInfo from "@/components/class/student/info/info";
import ClassWrap from "@/components/class/wrap/wrap";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import edit from "@/../public/icons/edit.svg";

export default async function StudentDetail({
  params,
}: {
  params: { id: string; sid: string };
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
    <ClassWrap>
      <ClassHeader content="학생 정보" />
      <div className={styles.user_default}>
        <Image
          src={student[0].profile}
          alt="profile"
          className={styles.profile}
          width={100}
          height={100}
        />
        <div className={styles.user_info}>
          <div className={styles.top_wrap}>
            <p className={styles.user_name}>{`${student[0].name} 학생`}</p>
            <div style={{ marginLeft: "12px" }} />
            <Link href={`edit/${params.sid}`}>
              <Image src={edit} alt="modify" width={24} height={24} />
            </Link>
          </div>
          <p
            className={styles.user_school}
          >{`${student[0].school} ${student[0].studentid}`}</p>
        </div>
      </div>
      <div className={styles.feature_wrap}>
        <div className={styles.info_wrap}>
          <StudentInfo title="성별" content={student[0].sex} />
          <StudentInfo title="생년월일" content={student[0].birthdate} />
          <StudentInfo title="보호자 전화번호" content={student[0].telephone} />
        </div>
        <div className={styles.disability_wrap}>
          <StudentFeature title="장애사항" content={student[0].disability} />
        </div>
      </div>
      <StudentFeature title="특이사항" content={student[0].significant} />
      <StudentInfo title="기초 조사서" content={<BasicReport />} />
      <StudentInfo title="ID" content={student[0]._id.toString()} />
      <StudentDelete id={params.sid} />
    </ClassWrap>
  );
}
