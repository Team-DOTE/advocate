"use client";
import styles from "@/components/navbar/navbar.module.css";
import Image from "next/image";
import profile0 from "@/../public/profile/profile0.png";
import profile1 from "@/../public/profile/profile1.png";
import profile2 from "@/../public/profile/profile2.png";
import user from "@/../public/icons/user.svg";
import iep from "@/../public/icons/iep.svg";
import manual from "@/../public/icons/manual.svg";
import add from "@/../public/icons/chat-add.svg";
import Profile from "../profile/profile";
import ClassInfo from "../class-info/class-info";
import { useState } from "react";
import Link from "next/link";

const parents =
  [
    { id: 0, profile: profile0, name: "황석준 보호자" },
    { id: 1, profile: profile1, name: "황석준 보호자" },
    { id: 2, profile: profile2, name: "황석준 보호자" },
    { id: 2, profile: profile2, name: "황석준 보호자" },
    { id: 2, profile: profile2, name: "황석준 보호자" },
    { id: 2, profile: profile2, name: "황석준 보호자" },
  ] || "";

export default function Navbar({
  profile,
  name,
  school,
  classname,
  classprofile,
  classid,
}: {
  profile: string;
  name: string;
  school: string;
  classname: string;
  classprofile: string;
  classid: string;
}) {
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.container}>
      <div style={visible ? {} : { display: "none" }} className={styles.navbar}>
        <div className={styles.navbar_background}>
          <ClassInfo name={classname} profile={classprofile} />
          <div className={styles.scroll}>
            <div className={styles.menu}>
              <p className={styles.menu_header}>메뉴</p>
              <Menu
                link={"/class/" + classid + "/students"}
                src={user}
                alt="user icon"
                title="학생 관리"
              />
              <Menu
                link={"/class/" + classid + "/iep"}
                src={iep}
                alt="iep icon"
                title="IEP 생성"
              />
              <Menu
                link={"/class/" + classid + "/manual"}
                src={manual}
                alt="manual icon"
                title="대처 메뉴얼"
              />
            </div>

            <div className={styles.message}>
              <div className={styles.message_header}>
                <p className={styles.message_title}>매세지</p>
                <Image
                  className={styles.message_icon}
                  src={add}
                  alt="add icon"
                />
              </div>
              {parents
                ? parents.map((parent, index) => (
                    <Message
                      key={index}
                      profile={parent.profile}
                      name={parent.name}
                    />
                  ))
                : ""}
            </div>
          </div>
          <div className={styles.user}>
            <Profile profile={profile} />
            <div className={styles.user_info}>
              <p className={styles.user_school}>{school}</p>
              <p className={styles.user_name}>{name} 선생님</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={visible ? { marginLeft: "30px" } : {}}
        onClick={() => {
          setVisible(!visible);
          if (visible === true) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }}
        className={styles.toggle_wrap}
      >
        <div className={styles.toggle}></div>
      </div>
    </div>
  );
}

function Menu({
  src,
  alt,
  title,
  link,
}: {
  src: any;
  alt: string;
  title: string;
  link: string;
}) {
  return (
    <Link href={link} className={styles.menu_button}>
      <Image className={styles.menu_icon} src={src} alt={alt} />
      <p className={styles.menu_text}>{title}</p>
    </Link>
  );
}

function Message({ profile, name }: { profile: any; name: string }) {
  return (
    <div className={styles.message_button}>
      <Image
        className={styles.message_profile}
        src={profile}
        alt="profile img"
      />
      <p className={styles.message_name}>{name}</p>
    </div>
  );
}
