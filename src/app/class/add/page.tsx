import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/app/class/add/page.module.css";
import Title from "@/components/title/title";
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
    <div>
      <Title title="클래스 생성" />
      <div className={styles.container}>
        <form method="POST" action="/api/class">
          <p className={styles.content}>클래스 이름을 입력해주세요.</p>
          <input
            placeholder="클래스 이름을 입력해주세요."
            className={styles.input}
            defaultValue={session.user.user.name + "의 클래스"}
            name="name"
          />
          <p className={styles.content}>클래스 생성자</p>
          <input
            value={session.user.user.userid}
            className={styles.input}
            name="owner"
            readOnly
          />
          <p className={styles.content}>클래스 프로필 사진</p>
          <input
            placeholder="프로필 사진 주소를 입력해주세요."
            className={styles.input}
            name="profile"
            defaultValue={profile}
          />
          <button type="submit" className={styles.button}>
            클래스 생성
          </button>
        </form>
      </div>
    </div>
  );
}
