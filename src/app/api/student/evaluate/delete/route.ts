import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export async function POST(request: NextRequest, response: NextResponse) {
    const session: any = await getServerSession(authOptions);
    const formData = await request.formData();
    const classid = formData.get("classid");
    const studentid = formData.get("studentid")
    const id:any = formData.get("id");
    try {
        let db = (await connectDB).db("advocate");
        await db.collection("evaluate").deleteOne({ _id: new ObjectId(id?.toString()) });
        return Response.redirect(
            process.env.URL + `/class/${classid}/evaluate/${studentid}`
          );
      } catch (error) {
        return Response.json({ status: 500, error });
      }
}