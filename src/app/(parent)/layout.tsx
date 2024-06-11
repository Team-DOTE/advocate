import BottomTab from "@/components/parent/bottomtab/bottomtab";
import ParentWrap from "@/components/parent/wrap/wrap";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ParentRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: any = await getServerSession(authOptions);
  if (session == null || session.user.user.role !== "parent") {
    redirect("/signin");
  }
  return (
    <div style={{ height: "100%" }}>
      {/* <div style={{ height: 54 }} /> */}
      <ParentWrap>{children}</ParentWrap>
      <div style={{ bottom: 0, position: "fixed", width: "100%" }}>
        <BottomTab />
      </div>
    </div>
  );
}
