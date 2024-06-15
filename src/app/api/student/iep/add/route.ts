import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/database";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ObjectId } from "mongodb";

export async function POST(request: NextRequest, response: NextResponse) {
  const date = new Date();
  const session: any = await getServerSession(authOptions);
  const formData = await request.formData();
  const student = formData.get("student");
  const subject = formData.get("subject");
  const level = formData.get("level");
  const purpose = formData.get("purpose");
  const classid = formData.get("classid");
  const iep = {
    date,
    student,
    subject,
    level,
    purpose,
    classid,
  };

  try {
    let db = (await connectDB).db("advocate");
    await db
      .collection("student")
      .updateOne(
        { _id: new ObjectId(student?.toString()) },
        { $set: { iep: true } }
      );
    await db.collection("iep").insertOne(iep);
    let iepdata = await db
      .collection("iep")
      .findOne({ date, student, subject, classid });
    return Response.json({ status: 200, success: true, iepdata });
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
