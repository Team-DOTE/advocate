import styles from "@/app/(teacher)/class/[id]/iep/page.module.css";
import ClassHeader from "@/components/class/header/header";
import IepForm from "@/components/class/iep/form/form";

import ClassWrap from "@/components/class/wrap/wrap";
import { connectDB } from "@/utils/database";

export default async function Iep({ params }: { params: { id: string } }) {
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
      <ClassHeader content="IEP 생성" />
      <IepForm
        params={params}
        userStudents={convertIdsToString(userStudents)}
      />
    </ClassWrap>
  );
}
