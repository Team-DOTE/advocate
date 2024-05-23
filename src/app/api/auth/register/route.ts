import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  var now = new Date();
  var seconds = now.getSeconds();
  var profile;
  const domain = process.env.URL;
  if (seconds % 3 == 0) {
    profile = domain + "profile0.png";
  } else if (seconds % 3 == 1) {
    profile = domain + "profile1.png";
  } else if (seconds % 3 == 2) {
    profile = domain + "profile2.png";
  }

  const formData = await request.formData();
  const userid = formData.get("userid");
  const password: string | any = formData.get("password")?.toString();
  const name = formData.get("name");
  const telephone = formData.get("telephone");
  const school = formData.get("school");
  const role = formData.get("role");
  const accept = formData.get("accept");
  const hash = await bcrypt.hash(password, 10);
  const user = {
    userid,
    password: hash,
    name,
    telephone,
    school,
    role,
    accept,
    profile,
  };

  let db = (await connectDB).db("advocate");
  let dbuser = await db.collection("users").findOne({ userid });

  if (dbuser) {
    return Response.redirect(process.env.URL + "/signup/?error=true" || "");
  }

  try {
    let db = (await connectDB).db("advocate");
    await db.collection("users").insertOne(user);
    return Response.redirect(process.env.URL + "/signin");
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
