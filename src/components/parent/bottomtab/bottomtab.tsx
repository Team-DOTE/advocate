import styles from "@/components/parent/bottomtab/bottomtab.module.css";
import messages from "@/../public/icons/messages.svg";
import students from "@/../public/icons/students.svg";
import settings from "@/../public/icons/setting.svg";
import Image from "next/image";

export default function BottomTab() {
  return (
    <div className={styles.container}>
      <Tab icon={messages} content="메세지" />
      <Tab icon={students} content="학생 관리" />
      <Tab icon={settings} content="설정" />
    </div>
  );
}

function Tab({ icon, content }: { icon: any; content: string }) {
  return (
    <div className={styles.wrap}>
      <Image className={styles.icon} src={icon} alt="tab-icon" />
      <p className={styles.content}>{content}</p>
    </div>
  );
}
