import { connectDB } from "@/utils/database";
import ClassHeader from "@/components/class/header/header";
import ClassWrap from "@/components/class/wrap/wrap";
import styles from "@/app/(teacher)/class/[id]/evaluate/page.module.css"
import EvaluateForm from "@/components/class/evaluate/evaluate";
export default async function Evaluate({
  params,
}: {
  params: { id: string };
}) {
  let db = (await connectDB).db("advocate");
  let userStudents = await db
    .collection("student")
    .find({ classid: params.id })
    .toArray();

  function convertIdsToString(data: any) {
    return data.map((item: any) => {
      return {
        ...item,
        _id: item._id.toString(),
      };
    });
  }
  return (
    <ClassWrap>
      <ClassHeader content="성취도 평가" />
      <EvaluateForm params={params} userStudents={convertIdsToString(userStudents)}/>
    </ClassWrap>
  );
}
