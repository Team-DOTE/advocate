import styles from "./page.module.css";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session: any = await getServerSession(authOptions);
  if (session === null) {
    redirect("/signin");
  } else {
    redirect("/class/all");
  }
}
