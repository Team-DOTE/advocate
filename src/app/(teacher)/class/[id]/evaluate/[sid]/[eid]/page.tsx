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
    
    return(
        <ClassWrap>
            <ClassHeader content={`${name}의 ${evaluate.subject} 성취도 평가`}/>
            <EvaluatecontentForm params={params} firstvalue={evaluate.content[evaluate.content.length - 1]}/>
            <div className={styles.evaluate_info}>
                <div className={styles.level_wrap}>
                    <div className={styles.level_title}>저번 성취도</div>
                    <div className={styles.level_date}>{evaluate.startdate}</div>
                    <div className={styles.level_content}>{`${evaluate.content[evaluate.content.length - 1]}%`}</div>
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
                        <div className={styles.date_content}>{evaluate.startdate}</div>
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