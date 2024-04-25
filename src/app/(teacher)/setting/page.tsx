import styles from "@/app/(teacher)/setting/page.module.css";

import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { connectDB } from "@/utils/database";
import ClassView from "@/components/class/view/class/view";
import ClassHeader from "@/components/class/header/header";
import ClassWrap from "@/components/class/wrap/wrap";
import ClassLink from "@/components/class/link/link";

export default async function Setting() {
  const session: any = await getServerSession(authOptions);
  let db = (await connectDB).db("advocate");
  let userClass = await db
    .collection("class")
    .find({ ownerid: session.user.user._id })
    .toArray();
  return (
    <ClassWrap>
      <ClassHeader content="설정" />
      <div className={styles.user_default}>
        <Image
          src={session.user.user.profile}
          alt="profile"
          className={styles.profile}
          width={100}
          height={100}
        />

        <div className={styles.user_info}>
          <p className={styles.user_name}>{session.user.user.name} 선생님</p>
          <p className={styles.user_school}>{session.user.user.school}</p>
        </div>
      </div>
      <div className={styles.tel_wrap}>
        <p className={styles.tel}>전화번호</p>
        <p className={styles.user_tel}>{session.user.user.telephone}</p>
      </div>

      <p className={styles.class}>클래스 목록</p>
      {userClass.map((class1, i) => (
        <ClassView
          delopt={true}
          key={i}
          name={class1.name}
          image={class1.profile}
          id={class1._id.toString()}
        />
      ))}
      <div style={{ height: "36px" }}></div>
      <ClassLink content="클래스 관리" href="/" />
    </ClassWrap>
  );
}
