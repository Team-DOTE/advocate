import styles from "@/app/(parent)/settings/page.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ParentLogout from "@/components/parent/logout/logout";
import SettingButton from "@/components/parent/setting/button/button";
import { getServerSession } from "next-auth";
import Image from "next/image";
import students from "@/../public/icons/students.svg";
import info from "@/../public/icons/info.svg";

export default async function Settings() {
  const session: any = await getServerSession(authOptions);

  return (
    <div>
      <div className={styles.header}>
        <p className={styles.title}>설정</p>
        <ParentLogout />
      </div>
      <div className={styles.info}>
        <Image
          className={styles.profile}
          src={session.user.user.profile}
          alt="profile"
          width={68}
          height={68}
        />
        <div>
          <p className={styles.name}>{session.user.user.name + "님"}</p>
          <p className={styles.telephone}>{session.user.user.telephone}</p>
        </div>
      </div>
      <div className={styles.button_wrap}>
        <SettingButton href="/settings" icon={students} title="학생관리" />
        <div style={{ width: "20px" }} />
        <SettingButton href="/settings" icon={info} title="정보" />
      </div>
    </div>
  );
}
