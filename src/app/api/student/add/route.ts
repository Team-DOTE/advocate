import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/database";

export async function POST(request: NextRequest, response: NextResponse) {
  const session: any = await getServerSession(authOptions);
  const formData = await request.formData();
  const name = formData.get("name");
  const school = formData.get("school");
  const classid = formData.get("classid");
  const birthdate = formData.get("birthdate");
  const disability = formData.get("disability");
  const significant = formData.get("significant");
  const telephone = formData.get("telephone");
  const teacher = formData.get("teacher");
  const profile = formData.get("profile");
  const studentid = formData.get("studentid");
  const sex = formData.get("sex");

  const student = {
    name,
    birthdate,
    school,
    studentid,
    sex,
    telephone,
    disability,
    significant,
    profile,
    teacher,
    classid,
  };

  const studentsUrl = new URL(`/class/${classid}/students`, request.url);
  studentsUrl.searchParams.set("from", request.nextUrl.pathname);

  let db = (await connectDB).db("advocate");

  try {
    let db = (await connectDB).db("advocate");
    await db.collection("student").insertOne(student);
    return Response.redirect(studentsUrl.href);
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
