import { getServerSession } from "next-auth";

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/database";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



export async function POST(request: NextRequest, response: NextResponse) {
  const date: any = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const startdate: any = `${year}년 ${month}월 ${day}일`;
  const formData: any = await request.formData();
  const studentid: any = formData.get("student");
  const classid = formData.get("classid");
  const subject: any = formData.get("subject");
  const enddate = formData.get("enddate");
  const evaluate = {
    startdate,
    enddate: `${enddate?.toString().substring(0, 4)}년 ${enddate
      ?.toString()
      .substring(5, 7)}월 ${enddate?.toString().substring(8, 10)}일`,
    studentid,
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
