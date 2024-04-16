import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/navbar/navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: any = await getServerSession(authOptions);
  if (session === null) {
    redirect("/signin");
  }
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Navbar />
      {/* <div style={{ marginLeft: "30px" }}></div> */}
      {children}
    </div>
  );
}
