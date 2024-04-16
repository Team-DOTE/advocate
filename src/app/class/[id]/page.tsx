import styles from "@/app/class/[id]/page.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  return <div style={{ display: "flex", height: "100%" }}>{params.id}</div>;
}
