import styles from "@/components/navbar/navbar.module.css";
import Image from "next/image";
import profile0 from "@/../public/profile/profile0.png";
import profile1 from "@/../public/profile/profile1.png";
import profile2 from "@/../public/profile/profile2.png";
import arrow from "@/../public/icons/class-arrow.svg";
import user from "@/../public/icons/user.svg";
import iep from "@/../public/icons/iep.svg";
import manual from "@/../public/icons/manual.svg";
import add from "@/../public/icons/chat-add.svg";
import le from "@/../public/le.png";

const parents = [
  { id: 0, profile: profile0, name: "황석준 보호자" },
  { id: 1, profile: profile1, name: "황석준 보호자" },
  { id: 2, profile: profile2, name: "황석준 보호자" },
  { id: 2, profile: profile2, name: "황석준 보호자" },
  { id: 2, profile: profile2, name: "황석준 보호자" },
  { id: 2, profile: profile2, name: "황석준 보호자" },
];

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_background}>
        <div className={styles.class_info}>
          <Image src={profile0} className={styles.class_img} alt="profile" />
          <p className={styles.class_name}>조성민님의 클래스</p>
          <Image src={arrow} className={styles.class_icon} alt="profile" />
        </div>
        <div className={styles.scroll}>
          <div className={styles.menu}>
            <p className={styles.menu_header}>메뉴</p>
            <Menu src={user} alt="user icon" title="학생 관리" />
            <Menu src={iep} alt="iep icon" title="IEP 생성" />
            <Menu src={manual} alt="manual icon" title="대처 메뉴얼" />
          </div>

          <div className={styles.message}>
            <div className={styles.message_header}>
              <p className={styles.message_title}>매세지</p>
              <Image className={styles.message_icon} src={add} alt="add icon" />
            </div>

            {parents.map((parent, index) => (
              <Message
                key={index}
                profile={parent.profile}
                name={parent.name}
              />
            ))}
          </div>
        </div>
        <div className={styles.user}>
          <Image
            className={styles.user_profile}
            src={le}
            alt="user profile img"
          />
          <div className={styles.user_info}>
            <p className={styles.user_school}>한국디지털미디어고등학교</p>
            <p className={styles.user_name}>김채원 선생님</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu({ src, alt, title }: { src: any; alt: string; title: string }) {
  return (
    <div className={styles.menu_button}>
      <Image className={styles.menu_icon} src={src} alt={alt} />
      <p className={styles.menu_text}>{title}</p>
    </div>
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
