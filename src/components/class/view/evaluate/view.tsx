import Link from "next/link";
import styles from "@/components/class/view/evaluate/view.module.css";
import EvaluateDelete from "@/components/class/evaluate/delete/delete";
import trash from "@/../public/icons/delete.svg";
import Image from "next/image";

export default function EvaluateView({
  subject,
  enddate,
  startdate,
  studentid,
  classid,
  id,
}: {
  subject: string;
  enddate: string;
  startdate: string;
  studentid: string;
  classid: string;
  id: string;
}) {
  const date = new Date();
  const year = date.getFullYear();
  const month: any = String(date.getMonth() + 1).padStart(2, "0");
  const day: any = String(date.getDate()).padStart(2, "0");
  const endyear: any = enddate.slice(0, 4);
  const endmonth: any = enddate.slice(6, 8);
  const endday: any = enddate.slice(10, 12);
  const dyear = endyear - year;
  const dmonth = endmonth - month;
  const dday = endday - day;
  const expired = dyear <= 0 && dmonth <= 0 && dday < 0 ? true : false;

  return (
    <div className={expired ? styles.evaluate_expired : styles.evaluate}>
      <Link href={`/class/${classid}/evaluate/${studentid}/${id}`} className={styles.wrap}>
        <div className={styles.student_info}>
          <div className={expired ? styles.name_expired : styles.name}>
            {subject} {expired ? `(평가종료)` : null}
          </div>
        </div>
        <div className={styles.end_wrap}>
          <div>
            <div className={styles.date}>평가 시작일: {startdate}</div>
            <div className={styles.date}>평가 종료일: {enddate}</div>
          </div>
        </div>
      </Link>
      <form method="POST" action="/api/student/evaluate/delete">
        <input defaultValue={classid} name="classid" type="hidden" />
        <input defaultValue={studentid} name="studentid" type="hidden" />
        <button className={expired ? styles.evaluate_button_del_expired : styles.evaluate_button_del} name="id" value={id}>
          <Image className={styles.icon} src={trash} alt="delete icon" />
        </button>
      </form>
    </div>
  );
}
