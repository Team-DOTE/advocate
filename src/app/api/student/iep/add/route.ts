import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import OpenAI from "openai";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface Student {
  _id: string;
  name: string;
  birthdate: string;
  school: string;
  studentid: string;
  sex: string;
  telephone: string;
  disability: string;
  significant: string;
  profile: string;
  teacher: string;
  classid: string;
  report: boolean;
}
export async function POST(request: NextRequest, response: NextResponse) {
  const session = getServerSession(authOptions);
  // const teacher = session.user.user.name;
  const date: any = new Date();
  const formData: any = await request.formData();
  const student: any = formData.get("student");
  const subject: any = formData.get("subject");
  const level: any = formData.get("level");
  const purpose: any = formData.get("purpose");
  const classid: any = formData.get("classid");
  let db = (await connectDB).db("advocate");
  let report = await db.collection("report").findOne({ student: student });
  let stu = await db
    .collection("student")
    .findOne({ _id: new ObjectId(student) });

  const name = stu?.name;
  const birthdate = stu?.birthdate;
  const disability = stu?.disability;
  const significant = stu?.significant;
  const studentid = stu?._id.toString();
  const iep = `정보를 바탕으로 IEP를 수립해줘. IEP는 JSON 형식이어야 한다. IEP에는 strength, weakness, problem, lesson, evaluate, family만 있어야 하며 
  strength는 과목 강점, weakness는 과목 약점, problem은 학생의 문제 행동, lesson은 문제행동을 해결하기 위한 교육 방법, evaluate는 학생이 교육이 잘 되고 있는지 평가 기준, family는 학생의 효과적인 교육을 위해 학생의 가족이 지원하는 방안이다.
  각 요소들은 모두 반말 및 표준어로 작성해야 하며 적어도 3개 이상의 내용들이 필요하다. 3개 이상의 내용들은 array로 구성한다. 1개 당 최소 50자.
  생성하기 원하는 과목은 ${subject}이고, ${level} 정도의 수준을 가지고 있으며, ${disability}를 가지고 있다. 해당 IEP의 교육 목표는 ${purpose}이고, 학생의 자세한 정보는 
  ${report}로 알 수 있다. 학생의 특이사항은 ${significant}이다.`;
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
    const content = JSON.parse(completion.choices[0].message.content);
    console.log("iep:", content);

    let db = (await connectDB).db("advocate");
    await db.collection("iep").insertOne({
      student,
      name: stu?.name,
      sex: stu?.sex,
      birthdate: stu?.birthdate,
      studentid: stu?.studentid,
      disability: stu?.disability,
      subject,
      date,
      content,
    });
    let iepdata = await db
      .collection("iep")
      .findOne({ student, subject, date });
    console.log(iepdata);
    return Response.json({ status: 200, success: true, iepdata });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 500, error });
  }
}
