import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(request: NextRequest, response: NextResponse) {
  const session: any = await getServerSession(authOptions);
  const formData = await request.formData();
  const name = formData.get("name");
  const owner = formData.get("owner");
  const ownerid = session.user.user._id;
  const profile = formData.get("profile");

  const class1 = {
    name,
    owner,
    ownerid,
    profile,
  };

  try {
    let db = (await connectDB).db("advocate");
    await db.collection("class").insertOne(class1);
    return Response.redirect(process.env.URL + "/class");
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
