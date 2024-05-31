import styles from "@/components/navbar/message/message.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Message({
  mid,
  id,

  profile,
  name,
  classid,
}: {
  mid: string;
  id: string;
  profile: any;
  name: string;
  classid: string;
}) {
  return (
    <Link
      href={`/class/${classid}/messages/${id}`}
      className={
        mid === id ? styles.message_active_button : styles.message_button
      }
    >
      <Image
        className={styles.message_profile}
        src={profile}
        alt="profile img"
        width={28}
        height={28}
      />
      <p className={styles.message_name}>{name}</p>
    </Link>
  );
}
