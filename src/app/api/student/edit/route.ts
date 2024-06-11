import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export async function POST(request: NextRequest, response: NextResponse) {
  const session: any = await getServerSession(authOptions);
  const formData = await request.formData();
  const name = formData.get("name");
  const school = formData.get("school");
  const birthdate = formData.get("birthdate");
  const disability = formData.get("disability");
  const significant = formData.get("significant");
  const telephone = formData.get("telephone");
  const profile = formData.get("profile");
  const classid = formData.get("classid");
  const studentid = formData.get("studentid");
  const sex = formData.get("sex");
  const studentsid = formData.get("studentsid");

  const student = {
    name,
    birthdate: `${birthdate?.toString().substring(0, 4)}년 ${birthdate
      ?.toString()
      .substring(5, 7)}월 ${birthdate?.toString().substring(8, 10)}일`,
    school,
    studentid,
    classid,
    sex,
    telephone,
    disability,
    significant,
    profile,
  };

  try {
    let db = (await connectDB).db("advocate");
    await db
      .collection("student")
      .updateOne(
        { _id: new ObjectId(studentsid?.toString()) },
        { $set: student }
      );
    return Response.redirect(
      process.env.URL + `/class/${classid}/students/${studentsid}`
    );
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
