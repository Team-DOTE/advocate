import ClassHeader from "@/components/class/header/header";
import IEPView from "@/components/class/iep/list/veiw";
import ClassWrap from "@/components/class/wrap/wrap";
import { connectDB } from "@/utils/database";

export default async function IEPList({
  params,
}: {
  params: { id: string; sid: string };
}) {
  let db = (await connectDB).db("advocate");
  let IEP = await db
    .collection("iep")
    .find({ "student": params.sid })
    .toArray();
  return (
    <ClassWrap>
      <ClassHeader content="IEP 목록" />
      {IEP.slice()
        .reverse()
        .map((iep, i) => (
          <IEPView
            key={i}
            subject={iep.subject}
            classid={params.id}
            iepid={iep._id.toString()}
            iepdate={iep.date.toString()}
          />
        ))}
    </ClassWrap>
  );
}
