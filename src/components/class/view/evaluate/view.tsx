import Link from "next/link";
import styles from "@/components/class/view/evaluate/view.module.css";
import EvaluateDelete from "@/components/class/evaluate/delete/delete";
import trash from "@/../public/icons/delete.svg";
import Image from "next/image";

export default async function EvaluateView({
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
  return (
    <div className={styles.evaluate}>
      <Link
      href={`/class/${classid}/evaluate/${studentid}/${id}`}
      className={styles.wrap}
    >
      <div className={styles.student_info}>
        <div className={styles.name}>{subject}</div>
      </div>
      <div className={styles.end_wrap}>
        <div>
          <div className={styles.date}>평가 시작일: {startdate}</div>
          <div className={styles.date}>평가 종료일: {enddate}</div>
        </div>
        <div className={styles.delete}>
          
        </div>
      </div>
    </Link>
    <form method="POST" action="/api/student/evaluate/delete">
            <input value={classid} name="classid" style={{display:'none'}}></input>
            <input value={studentid} name="studentid" style={{display:'none'}}></input>
            <button className={styles.class_button_del} name="id" value={id}>
              <Image className={styles.icon} src={trash} alt="delete icon" />
            </button>
          </form>
    </div>
    
  );
}
