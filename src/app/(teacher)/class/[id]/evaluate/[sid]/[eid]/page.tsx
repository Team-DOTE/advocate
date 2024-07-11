import ClassHeader from "@/components/class/header/header";
import ClassWrap from "@/components/class/wrap/wrap";
import styles from "@/app/(teacher)/class/[id]/evaluate/[sid]/[eid]/page.module.css"
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import StudentFeature from "@/components/class/student/feature/feature";
import Graph from "@/components/class/evaluate/graph/graph";
import ClassInput from "@/components/class/input/input";
import EvaluatecontentForm from "@/components/class/evaluate/form/form";


export default async function EvaluateList({params}:{params:{id:string, sid:string, eid:string}}){
    let db = (await connectDB).db("advocate");
    let studentObjectId = new ObjectId(params.sid);
    let evaluateObjectId = new ObjectId(params.eid);
    let student:any = await db.collection("student").findOne({ _id : studentObjectId });
    let name:any = student.name;
    let evaluate:any = await db.collection("evaluate").findOne({ _id : evaluateObjectId});
    const date: any = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const Converteddate: any = `${year}년 ${month}월 ${day}일`;
    const startyear = evaluate.startdate.slice(0, 4);
    const startmonth = evaluate.startdate.slice(6, 8);
    const startday = evaluate.startdate.slice(10, 12);
    const endyear = evaluate.enddate.slice(0, 4);
    const endmonth = evaluate.enddate.slice(6, 8);
    const endday = evaluate.enddate.slice(10, 12);
    const dyear = endyear - startyear;
    const dmonth = endmonth - startmonth;
    const dday = endday - startday;
    let did = (Converteddate == evaluate.dates[evaluate.dates.length - 1]) ? true : false;
    
    
    return(
        <ClassWrap>
            <ClassHeader content={`${name}의 ${evaluate.subject} 성취도 평가`}/>
            <EvaluatecontentForm params={params} firstvalue={evaluate.content[evaluate.content.length - 1]} did = {did}/>
            <div className={styles.evaluate_info}>
                <div className={styles.level_wrap}>
                    <div className={styles.level_title}>최근 성취도</div>
                    <div className={styles.level_date}>{evaluate.startdate}</div>
                    <div className={styles.level_content}>{(did)?`${evaluate.content[evaluate.content.length - 1]}%`:`0%`}</div>
                </div>
                <div className={styles.dates_wrap}>
                    <div className={styles.date_wrap}>
                        <div className={styles.date_title}>평가 시작일</div>
                        <div className={styles.date_content}>{evaluate.startdate}</div>
                    </div>
                    <div className={styles.date_wrap}>
                        <div className={styles.date_title}>평가 종료일</div>
                        <div className={styles.date_content}>{evaluate.enddate}</div>
                    </div>
                    <div className={styles.date_wrap} style={{margin:"0"}}>
                        <div className={styles.date_title}>종료일 까지</div>
                        <div className={styles.date_content}>{(dyear)?`${dyear}년`:null} {(dmonth)?`${dmonth}개월`:null} {(dday)?`${dday}일`:null}{(dyear || dmonth || dday)?`남음`:`D-Day`}</div>
                    </div>
                </div>
            </div>
            <div className={styles.graph_wrap}>
                <div className={styles.graph_title}>성취도 그래프</div>
                <div className={styles.graph_content}><Graph title = {`${evaluate.subject}`} content = {evaluate.content} dates = {evaluate.dates}/></div>
            </div>
        </ClassWrap>
    )
}