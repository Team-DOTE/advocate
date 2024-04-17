import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData();
  const id = formData.get("id");

  const settingUrl = new URL("/setting", request.url);
  settingUrl.searchParams.set("from", request.nextUrl.pathname);

  try {
    let db = (await connectDB).db("advocate");
    await db
      .collection("class")
      .deleteOne({ _id: new ObjectId(id?.toString()) });
    // 해당 클래스를 가지고 있는 학생 전체 삭제
    return Response.redirect(settingUrl.href);
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
