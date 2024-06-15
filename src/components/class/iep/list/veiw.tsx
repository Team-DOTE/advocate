import styles from "@/components/class/iep/list/veiw.module.css";
import Image from "next/image";
import Link from "next/link";

export default function IEPView({
  subject,
  classid,
  iepid,
  iepdate
}: {
  subject: string;
  classid: string;
  iepid: string;
  iepdate: string;
}) {
  const date = new Date(iepdate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

const formattedDate = `${year}/${month}/${day}`;
  return (
    <Link href={`/class/${classid}/iep/result/${iepid}`} className={styles.iep}>
      <div className={styles.iep_info}>
        <p className={styles.subject}>{subject}</p>
        <p className={styles.date}>{formattedDate}</p>
      </div>
    </Link>
  );
}
