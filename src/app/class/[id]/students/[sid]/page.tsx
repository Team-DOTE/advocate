import styles from "@/app/class/[id]/students/[sid]/page.module.css";
import ClassHeader from "@/components/class/header/header";
import ClassWrap from "@/components/class/wrap/wrap";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function StudentDetail({
  params,
}: {
  params: { sid: string };
}) {
  // const ro;
  let db = (await connectDB).db("advocate");
  let student = await db
    .collection("student")
    .find({ _id: new ObjectId(params.sid) })
    .toArray();

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
          <p className={styles.user_name}>{`${student[0].name} 학생`}</p>
          <p
            className={styles.user_school}
          >{`${student[0].school} ${student[0].studentid}`}</p>
        </div>
      </div>
    </ClassWrap>
  );
}
