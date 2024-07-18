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
  const adaption_strength = formData.get("adaption_strength");
  const adaption_weakness = formData.get("adaption_weakness");
  const exercise_strength = formData.get("exercise_strength");
  const exercise_weakness = formData.get("exercise_weakness");
  const sociality_strength = formData.get("sociality_strength");
  const sociality_weakness = formData.get("sociality_weakness");
  const recognition_strength = formData.get("recognition_strength");
  const recognition_weakness = formData.get("recognition_weakness");
  const communication_strength = formData.get("communication_strength");
  const communication_weakness = formData.get("communication_weakness");
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
    adaption_strength,
    adaption_weakness,
    exercise_strength,
    exercise_weakness,
    sociality_strength,
    sociality_weakness,
    recognition_strength,
    recognition_weakness,
    communication_strength,
    communication_weakness,
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
