import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/navbar/navbar";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ClassLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const session: any = await getServerSession(authOptions);
  if (session === null) {
    redirect("/signin");
  }
  let db = (await connectDB).db("advocate");
  let userClass = await db
    .collection("class")
    .find({ _id: new ObjectId(params.id) })
    .toArray();
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Navbar
        profile={session.user.user.profile}
        name={session.user.user.name}
        school={session.user.user.school}
        classname={userClass[0].name}
        classprofile={userClass[0].profile}
      />
      {/* <div style={{ marginLeft: "30px" }}></div> */}
      {children}
    </div>
  );
}
