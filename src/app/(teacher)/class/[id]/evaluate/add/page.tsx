import EvaluateForm from "@/components/class/evaluate/add/add";
import ClassHeader from "@/components/class/header/header";
import ClassWrap from "@/components/class/wrap/wrap";
import { connectDB } from "@/utils/database";


export default async function AddEvaluate({
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
      <ClassHeader content="평가 항목 추가" />
      <EvaluateForm params={params} userStudents={convertIdsToString(userStudents)}/>
    </ClassWrap>
  );
}
