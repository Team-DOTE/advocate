import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import OpenAI from "openai";

export async function POST(request: NextRequest, response: NextResponse) {
  const date: any = new Date();
  const formData: any = await request.formData();
  const student: any = formData.get("student");
  const subject: any = formData.get("subject");
  const level: any = formData.get("level");
  const purpose: any = formData.get("purpose"); //
  const classid: any = formData.get("classid"); //
  let db = (await connectDB).db("advocate");
  let report = await db.collection("report").findOne({ student: student });
  let stu = await db
    .collection("student")
    .findOne({ _id: new ObjectId(student) });
  let name, studentid, sex, disability, significant;
  if (stu) {
    name = stu.name; //
    studentid = stu.studentid;
    sex = stu.sex; //
    disability = stu.disability; //
    significant = stu.significant;
  }
  let adaption,
    exercise,
    sociality,
    recognition,
    communication,
    problem,
    family,
    postscript;
  if (report) {
    adaption = report.adaption;
    exercise = report.exercise;
    sociality = report.sociality;
    recognition = report.recognition;
    communication = report.communication;
    problem = report.problem;
    family = report.family;
    postscript = report.postscript;
  }

  const iep = `정보를 바탕으로 iep 생성해줘, date: ${date}, student: ${student}, subject: ${subject}, level: ${level}, purpose: ${purpose}, classid: ${classid}, name: ${name}, studentid: ${studentid}, sex: ${sex}, disability: ${disability}, significant: ${significant}, adaption: ${adaption}, exercise: ${exercise}, sociality: ${sociality}, recognition: ${recognition}, communication: ${communication}, problem: ${problem}, family: ${family}, postscript: ${postscript}, data는 json으로만 name, studentid, birth, sex, class, disability, date, subject, strength, lesson, purpose, evaluationPlan, support, supportPlan로 보내줘`;

  try {
    const openai = new OpenAI({
      apiKey: process.env.API_KEY,
      dangerouslyAllowBrowser: true,
    });
    const completion: any = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: iep,
        },
      ],
      model: "ft:gpt-3.5-turbo-1106:personal:iep-generator:9ZzZOEET",
      max_tokens: 2000,
    });
    console.log(completion.choices[0].message.content);
    // const obj = JSON.parse(completion.choices[0].message.content);
    const obj = JSON.parse(completion.choices[0].message.content);
    console.log(obj);

    let db = (await connectDB).db("advocate");
    await db.collection("iep").insertOne(obj);
    let iepdata = await db
      .collection("iep")
      .findOne({ subject: subject, studentid: studentid });
    return Response.json({ status: 200, success: true, iepdata });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 500, error });
  }
}
