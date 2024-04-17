import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData();
  const id = formData.get("id");
  let db = (await connectDB).db("advocate");
  let userClass = await db
    .collection("class")
    .deleteOne({ _id: new ObjectId(id?.toString()) });

  return Response.json({ status: "200" });
}
