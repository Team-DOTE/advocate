import Link from "next/link";
import styles from "@/components/class/view/evaluate/view.module.css"

export default async function EvaluateView({
    subject,
    enddate,
    startdate,
    studentid,
    classid,
    id
  }: {
    subject: string;
    enddate:string;
    startdate: string;
    studentid: string;
    classid: string;
    id: string
  }){
    return(
        <Link href={`/class/${classid}/evaluate/${studentid}/${id}`} className={styles.evaluate}>
            <div className={styles.student_info}>
                <div className={styles.name}>{subject}</div>
            </div>
            <div>
              <div className={styles.date}>평가 시작일: {startdate}</div>
              <div className={styles.date}>평가 종료일: {enddate}</div>
            </div>
        </Link>
    )
}