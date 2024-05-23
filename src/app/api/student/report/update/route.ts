import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ObjectId } from "mongodb";

export async function POST(request: NextRequest, response: NextResponse) {
  const session: any = await getServerSession(authOptions);
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDay();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  const formData = await request.formData();
  const adaption = formData.get("adaption");
  const exercise = formData.get("exercise");
  const sociality = formData.get("sociality");
  const recognition = formData.get("recognition");
  const communication = formData.get("communication");
  const problem = formData.get("problem");
  const family = formData.get("family");
  const postscript = formData.get("postscript");
  const student = formData.get("student");

  let db = (await connectDB).db("advocate");
  const studentInfo = await db
    .collection("student")
    .findOne({ _id: new ObjectId(student?.toString()) });

  const classid = studentInfo?.classid;

  const report = {
    adaption,
    exercise,
    sociality,
    recognition,
    communication,
    problem,
    family,
    postscript,
    student,
    classid,
    editor: session.user.user._id,
    modifydate: `${year}년 ${month}월 ${day}일`,
    modifytime: `${hours}시 ${minutes}분 ${seconds}초`,
  };

  try {
    let db = (await connectDB).db("advocate");
    await db.collection("report").updateOne({ student }, { $set: report });
    if (session.user.user.role === "teacher") {
      return Response.redirect(
        process.env.URL + `/class/${classid}/students/${student}`
      );
    } else {
      return Response.redirect(process.env.URL + "/");
    }
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
