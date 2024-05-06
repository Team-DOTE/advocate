import styles from "@/app/(teacher)/class/[id]/students/[sid]/page.module.css";
import ClassHeader from "@/components/class/header/header";
import StudentDelete from "@/components/class/student/delete/delete";
import StudentFeature from "@/components/class/student/feature/feature";
import StudentInfo from "@/components/class/student/info/info";
import ClassWrap from "@/components/class/wrap/wrap";
import ParentHeader from "@/components/parent/header/header";
import ParentWrap from "@/components/parent/wrap/wrap";
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
    </div>
  );
}
