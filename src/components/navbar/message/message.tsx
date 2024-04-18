import styles from "@/components/navbar/message/message.module.css";
import Image from "next/image";

export default function Message({
  profile,
  name,
}: {
  profile: any;
  name: string;
}) {
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
