import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request: NextRequest, response: NextResponse) {
  const session: any = await getServerSession(authOptions);
  const date: any = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const Converteddate: any = `${year}년 ${month}월 ${day}일`;
  const formData = await request.formData();
  const classid = formData.get("classid");
  const studentid = formData.get("studentid");
  const id = formData.get("id");
  const content = formData.get("content");

  try {
    let db = (await connectDB).db("advocate");
    await db
      .collection("evaluate")
      .updateOne(
        { _id: new ObjectId(id?.toString()) },
        {
          $push: {
            content: content,
            dates: Converteddate
          }
        }
      );
    return Response.redirect(
      process.env.URL + `/class/${classid}/evaluate/${studentid}/${id}`
    );
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
