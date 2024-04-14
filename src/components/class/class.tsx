"use client";

import styles from "@/components/class/class.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import arrow from "@/../public/icons/class-arrow.svg";
import profile0 from "@/../public/profile/profile0.png";

export default function ClassModal() {
  const [visible, serVisible] = useState<boolean>(false);
  const [modalStyle, setModalStyle] = useState(styles.modal_none);
  return (
    <div>
      <div className={styles.class_info}>
        <Image src={profile0} className={styles.class_img} alt="profile" />
        <p className={styles.class_name}>조성민님의 클래스</p>
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
          src={arrow}
          className={styles.class_icon}
          alt="profile"
        />
        <div style={visible ? {} : {}} className={modalStyle}>
          <Link className={styles.modal_option} href="/all-class">
            클래스 목록
          </Link>
        </div>
      </div>
    </div>
  );
}
