import styles from "@/app/(parent)/settings/page.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ParentLogout from "@/components/parent/logout/logout";
import { getServerSession } from "next-auth";
import Image from "next/image";

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
    </div>
  );
}
