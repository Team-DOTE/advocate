import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/app/class/add/page.module.css";
import ClassButton from "@/components/class/button/button";
import ClassHeader from "@/components/class/header/header";
import ClassInput from "@/components/class/input/input";
import ClassWrap from "@/components/class/wrap/wrap";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AddClass() {
  const session: any = await getServerSession(authOptions);
  if (session === null) {
    redirect("/signin");
  }
  var now = new Date();
  var seconds = now.getSeconds();
  var profile;
  const domain = "https://dote-advocate.vercel.app/profile/";
  if (seconds % 3 == 0) {
    profile = domain + "profile0.png";
  } else if (seconds % 3 == 1) {
    profile = domain + "profile1.png";
  } else if (seconds % 3 == 2) {
    profile = domain + "profile2.png";
  }

  return (
    <ClassWrap>
      <ClassHeader content="클래스 생성" />
      <form method="POST" action="/api/class/add">
        <ClassInput
          content="클래스 이름을 입력해주세요."
          name="name"
          placeholder="클래스이름을 입력해주세요."
          defaultValue={session.user.user.name + "님의 클래스"}
        />
        <ClassInput
          content="클래스 생성자"
          name="owner"
          placeholder="클래스 생성자"
          defaultValue={session.user.user.userid}
          readonly={true}
        />
        <ClassInput
          content="클래스 프로필 사진 주소를 입력해주세요."
          name="profile"
          placeholder="프로필 사진 주소를 입력해주세요."
          defaultValue={profile}
        />
        <ClassButton content="클래스 생성" />
      </form>
    </ClassWrap>
  );
}
