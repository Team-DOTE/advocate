import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/app/class/all/page.module.css";
import Class from "@/components/class/class";
import Title from "@/components/title/title";
import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AllClass() {
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
    <div className={styles.all_class}>
      <Title title="클래스 관리" />
      <div className={styles.class_wrap}>
        <Link className={styles.class_add} href="/class/add">
          클래스 추가
        </Link>
        {userClass.map((class1, i) => (
          <Class
            delopt={false}
            key={i}
            name={class1.name}
            image={class1.profile}
            id={class1._id.toString()}
          />
        ))}
      </div>
      <div style={{ marginBottom: "36px" }}></div>
    </div>
  );
}
