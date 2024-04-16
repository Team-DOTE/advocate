import styles from "@/app/setting/page.module.css";
import Class from "@/components/class/class";
import Title from "@/components/title/title";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { connectDB } from "@/utils/database";

export default async function Setting() {
  const session: any = await getServerSession(authOptions);
  let db = (await connectDB).db("advocate");
  let userClass = await db
    .collection("class")
    .find({ ownerid: session.user.user._id })
    .toArray();
  return (
    <div>
      <Title title="설정" />
      <div className={styles.user_default}>
        <Image
          src={
            "https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png"
          }
          alt="profile"
          className={styles.profile}
          width={150}
          height={150}
        />

        <div className={styles.user_info}>
          <p className={styles.user_name}>조성민 선생님</p>
          <p className={styles.user_school}>한국디지털미디어고등학교</p>
        </div>
      </div>
      <div className={styles.tel_wrap}>
        <p className={styles.tel}>전화번호</p>
        <p className={styles.user_tel}>010-9356-3160</p>
      </div>

      <p className={styles.class}>클래스 목록</p>
      {userClass.map((class1, i) => (
        <Class
          key={i}
          name={class1.name}
          image={class1.profile}
          id={class1._id.toString()}
        />
      ))}
      <div style={{ height: "36px" }}></div>
    </div>
  );
}
