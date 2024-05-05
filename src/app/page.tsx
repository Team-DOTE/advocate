import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session: any = await getServerSession(authOptions);
  if (session.user.user.role === "teacher") {
    redirect("/class");
  } else {
    redirect("/signin");
  }
}
