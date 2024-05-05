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
import UserInfo from "./info/user/user";
import ClassInfo from "./info/class/class";
import Menu from "@/components/navbar/menu/menu";
import Message from "./message/message";

const parents =
  [
    { id: 0, profile: profile0, name: "황석준 보호자" },
    { id: 1, profile: profile1, name: "황석준 보호자" },
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
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.toggle} id="toggle" />
      <label className={styles.toggle_wrap} htmlFor="toggle">
        <div className={styles.toggle_button}></div>
      </label>
      <div className={styles.navbar}>
        <ClassInfo name={classname} profile={classprofile} />
        <div className={styles.scroll}>
          <div className={styles.menu}>
            <p className={styles.menu_header}>메뉴</p>
            <Menu
              link={"/class/" + classid + "/students"}
              src={user}
              alt="user icon"
              title="학생 관리"
              name="students"
            />
            <Menu
              link={"/class/" + classid + "/iep"}
              src={iep}
              alt="iep icon"
              title="IEP 생성"
              name="iep"
            />
            <Menu
              link={"/class/" + classid + "/manual"}
              src={manual}
              alt="manual icon"
              title="대처 메뉴얼"
              name="manual"
            />
          </div>
          <div>
            <div className={styles.message_header}>
              <p className={styles.message_title}>매세지</p>
              <Image className={styles.message_icon} src={add} alt="add icon" />
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
          <UserInfo profile={profile} />
          <div className={styles.user_info}>
            <p className={styles.user_school}>{school}</p>
            <p className={styles.user_name}>{name} 선생님</p>
          </div>
        </div>
      </div>
    </div>
  );
}
