import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";


export async function POST(request: NextRequest, response: NextResponse) {
  const date: any = new Date();
  const formData: any = await request.formData();
  const student: any = formData.get("student");
  const subject: any = formData.get("subject");
  const level: any = formData.get("level");
  const purpose: any = formData.get("purpose"); //
  const classid: any = formData.get("classid"); //
  let db = (await connectDB).db("advocate");
  let report = await db.collection("report").findOne({ student: student });
  
}
