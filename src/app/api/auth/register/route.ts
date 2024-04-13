import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  var now = new Date();
  var seconds = now.getSeconds();
  var profile;
  const domain = "https://dote-advocate.vercel.app";
  if (seconds % 3 == 0) {
    profile = domain + "profile0";
  } else if (seconds % 3 == 1) {
    profile = domain + "profile1";
  } else if (seconds % 3 == 2) {
    profile = domain + "profile2";
  }
  const formData = await request.formData();
  const userid = formData.get("userid");
  const password: string | any = formData.get("password")?.toString();
  const telephone = formData.get("telephone");
  const school = formData.get("school");
  const role = formData.get("role");
  const accept = formData.get("accept");
  const hash = await bcrypt.hash(password, 10);
  const user = {
    userid,
    password: hash,
    telephone,
    school,
    role,
    accept,
    profile,
  };

  const loginUrl = new URL("/signin", request.url);
  loginUrl.searchParams.set("from", request.nextUrl.pathname);

  let db = (await connectDB).db("advocate");
  let dbuser = await db.collection("users").findOne({ userid });

  if (dbuser) {
    return Response.redirect(process.env.URL + "/signup/error" || "");
  }

  try {
    let db = (await connectDB).db("advocate");
    await db.collection("users").insertOne(user);
    return Response.redirect(loginUrl.href);
  } catch (error) {
    return Response.json({ status: 500, error });
  }
}
