import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData();
  const id = formData.get("id");

  try {
    let db = (await connectDB).db("advocate");
    await db
      .collection("class")
      .deleteOne({ _id: new ObjectId(id?.toString()) });
    await db.collection("report").deleteMany({ classid: id });
    await db.collection("student").deleteMany({ classid: id });
    return Response.redirect(process.env.URL + "/setting");
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
