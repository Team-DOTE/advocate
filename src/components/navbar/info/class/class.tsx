import styles from "@/components/navbar/info/class/class.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import arrow from "@/../public/icons/class-arrow.svg";

export default function ClassInfo({
  profile,
  name,
}: {
  profile: string;
  name: string;
}) {
  const [visible, setVisible] = useState<boolean>(false);
  const [modalStyle, setModalStyle] = useState(styles.modal_none);
  return (
    <div>
      <div className={styles.class_info}>
        <Image
          width={36}
          height={36}
          src={profile}
          className={styles.class_img}
          alt="profile"
        />
        <p className={styles.class_name}>{name}</p>
        <Image
          onClick={() => {
            if (visible === true) {
              setModalStyle(styles.modal_out);
              setVisible(false);
            } else {
              setModalStyle(styles.modal_in);
              setVisible(true);
            }
          }}
          src={arrow}
          className={styles.class_icon}
          alt="profile"
        />
        <div style={visible ? {} : {}} className={modalStyle}>
          <Link className={styles.modal_option} href="/class">
            클래스 목록
          </Link>
        </div>
      </div>
    </div>
  );
}
