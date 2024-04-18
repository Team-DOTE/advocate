import styles from "@/components/navbar/info/user/user.module.css";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UserInfo({ profile }: { profile: string }) {
  const [visible, serVisible] = useState<boolean>(false);
  const [modalStyle, setModalStyle] = useState(styles.modal_none);
  return (
    <div>
      <div style={visible ? {} : {}} className={modalStyle}>
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
      <Image
        onClick={() => {
          if (visible === true) {
            setModalStyle(styles.modal_out);
            serVisible(false);
          } else {
            setModalStyle(styles.modal_in);
            serVisible(true);
          }
        }}
        className={styles.user_profile}
        src={profile}
        alt="user profile img"
        width={40}
        height={40}
      />
    </div>
  );
}
