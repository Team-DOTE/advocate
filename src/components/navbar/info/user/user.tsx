import styles from "@/components/navbar/info/user/user.module.css";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function UserInfo({ profile }: { profile: string }) {
  return (
    <div>
      <input type="checkbox" className={styles.toggle} id="user-toggle" />
      <label className={styles.toggle_wrap} htmlFor="user-toggle">
        <Image
          className={styles.user_profile}
          src={profile}
          alt="user profile img"
          width={40}
          height={40}
        />
      </label>
      <div className={styles.modal}>
        <p
          style={{ margin: 0 }}
          className={styles.modal_option}
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </p>
        <Link className={styles.modal_option} href="/setting">
          설정
        </Link>
      </div>
    </div>
  );
}
