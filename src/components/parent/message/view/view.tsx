import styles from "@/components/parent/message/view/view.module.css";
import Image from "next/image";
import profile0 from "@/../public/profile/profile0.png";
import Link from "next/link";

export default function ParentMessageView({
  name,
  content,
  time,
  href,
}: {
  name: string;
  content: string;
  time: string;
  href: string;
}) {
  return (
    <Link href={href} className={styles.message}>
      <Image
        className={styles.profile}
        src={"https://dote-advocate.vercel.app/profile/sungmin.png"}
        alt="profile image"
        width={48}
        height={48}
      />
      <div className={styles.info}>
        <div className={styles.wrap}>
          <p className={styles.name}>{name}</p>
          <p className={styles.content}>{content}</p>
        </div>
        <p className={styles.time}>{time}</p>
      </div>
    </Link>
  );
}
