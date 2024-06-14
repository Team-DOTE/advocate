import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest, response: NextResponse) {
  const { searchParams } = new URL(request.url);
  const param = searchParams.get("iid");

  try {
    let db = (await connectDB).db("advocate");
    let iepdata = await db
      .collection("iep")
      .findOne({ _id: new ObjectId(param?.toString()) });
    return Response.json({ status: 200, success: true, iepdata });
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
