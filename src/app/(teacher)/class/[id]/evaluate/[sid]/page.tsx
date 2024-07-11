import ClassHeader from "@/components/class/header/header";
import EvaluateView from "@/components/class/view/evaluate/view";
import ClassWrap from "@/components/class/wrap/wrap";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import styles from "@/app/(teacher)/class/[id]/evaluate/[sid]/page.module.css"


export default async function EvaluateList({params}:{params:{id:string, sid:string}}){
    let db = (await connectDB).db("advocate");
    let studentObjectId = new ObjectId(params.sid);
    let student:any = await db.collection("student").findOne({ _id : studentObjectId });
    let name:any = student.name;
    let evaluates = await db.collection("evaluate").find({ studentid: params.sid }).toArray();
    return(
        <ClassWrap>
            <ClassHeader content={`${name}의 평가 항목`}/>
            {(evaluates[0]) ?
            evaluates.map((evaluate, index) => (
                <div key={index}><EvaluateView subject={evaluate.subject} startdate={evaluate.startdate} enddate={evaluate.enddate} studentid={evaluate.studentid} classid={evaluate.classid} id={evaluate._id.toString()}/></div>
            )) : <div className={styles.none}>평가 항목이 존재하지 않습니다.</div>
            }
        </ClassWrap>
    )
}