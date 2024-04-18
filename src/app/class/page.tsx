import styles from "@/app/class/page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { connectDB } from "@/utils/database";
import ClassLink from "@/components/class/link/link";
import ClassWrap from "@/components/class/wrap/wrap";
import ClassView from "@/components/class/view/class/view";
import ClassLogout from "@/components/class/logout/logout";

export default async function Class() {
  const session: any = await getServerSession(authOptions);
  if (session === null) {
    redirect("/signin");
  }
  let db = (await connectDB).db("advocate");
  let userClass = await db
    .collection("class")
    .find({ ownerid: session.user.user._id })
    .toArray();

  return (
    <ClassWrap>
      <div className={styles.header}>
        <p className={styles.title}>클래스 관리</p>
        <ClassLogout />
      </div>
      <div className={styles.class_wrap}>
        <ClassLink content="클래스 추가" href="/class/add" />
        {userClass.map((class1, i) => (
          <ClassView
            key={i}
            name={class1.name}
            image={class1.profile}
            id={class1._id.toString()}
            delopt={false}
          />
        ))}
      </div>
    </ClassWrap>
  );
}
