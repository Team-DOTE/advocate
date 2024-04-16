import styles from "@/app/class/[id]/page.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/navbar/navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const session: any = await getServerSession(authOptions);
  if (session === null) {
    redirect("/signin");
  }
  return <div style={{ display: "flex", height: "100%" }}>{params.id}</div>;
}
