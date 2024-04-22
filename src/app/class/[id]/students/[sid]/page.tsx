import styles from "@/app/class/[id]/students/[sid]/page.module.css";
import ClassHeader from "@/components/class/header/header";
import StudentFeature from "@/components/class/student/feature/feature";
import StudentInfo from "@/components/class/student/info/info";
import ClassWrap from "@/components/class/wrap/wrap";
import ClassInfo from "@/components/navbar/info/class/class";
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
      <div className={styles.feature_wrap}>
        <div className={styles.info_wrap}>
          <StudentInfo title="성별" content="남자" />
          <StudentInfo title="생년월일" content="2007년 12월 19일" />
          <StudentInfo title="보호자 전화번호" content="010-9356-3160" />
        </div>
        <div className={styles.disability_wrap}>
          <StudentFeature
            title="장애사항"
            content="지체 장애, 정서ㆍ행동장애, 자폐성 장애"
          />
        </div>
      </div>
      <StudentFeature
        title="특이사항"
        content="황석준 어린이는 나빠요. 황석준 어린이는 독서를 열심히 하며, 글을 읽고 쓸 수 있음. 황석준이란? 돌덩이이다. 그는 깨달음을 얻기 위해서 자연에 들어가 자연판 ‘나혼자 산다'라고 할 수 있는 ‘나는 자연인이다’에 출연하여 큰 인기를 얻지 못하였다. 참고로 ‘나는 자연인이다’는 우리 아빠가 좋아했던 프로그램이다. 그는 고양이를 좋아하는 것으로 보이며 자폐성 장애가 되기를 희망하고있다."
      />
    </ClassWrap>
  );
}
