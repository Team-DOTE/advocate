import styles from "@/app/(parent)/settings/info/page.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ParentHeader from "@/components/parent/header/header";
import SettingUserInfo from "@/components/parent/setting/info/info";
import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";

export default async function SettingInfo() {
  const session: any = await getServerSession(authOptions);
  let db = (await connectDB).db("advocate");
  let userStudents = await db
    .collection("student")
    .find({ telephone: session.user.user.telephone })
    .toArray();
  return (
    <div>
      <ParentHeader content="정보" />
      <SettingUserInfo title="이름" content={session.user.user.name} />
      <SettingUserInfo title="전화번호" content={session.user.user.telephone} />
      <SettingUserInfo title="자녀 수" content={userStudents.length + " 명"} />
      <SettingUserInfo title="ID" content={session.user.user._id} />
      <div style={{ width: "24px" }} />
    </div>
  );
}
