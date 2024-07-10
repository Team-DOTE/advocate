import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/database";


export async function POST(request: NextRequest, response: NextResponse) {
  const session: any = await getServerSession(authOptions);
  const date: any = new Date();
  const formData: any = await request.formData();
  const student: any = formData.get("student");
  const classid = formData.get("classid");
  const subject: any = formData.get("subject");
  const enddate = formData.get("enddate");
  const evaluate = {
    enddate: `${enddate?.toString().substring(0, 4)}년 ${enddate
      ?.toString()
      .substring(5, 7)}월 ${enddate?.toString().substring(8, 10)}일`,
    student,
    subject,
    classid,
  };
  try {
    let db = (await connectDB).db("advocate");
    await db.collection("evaluate").insertOne(evaluate);
    return Response.json({ status: 200, success: true });
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
