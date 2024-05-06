import BottomTab from "@/components/parent/bottomtab/bottomtab";
import ParentWrap from "@/components/parent/wrap/wrap";
import React from "react";

export default function ParentRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: "100%" }}>
      <ParentWrap>{children}</ParentWrap>
      <div style={{ bottom: 0, position: "absolute", width: "100%" }}>
        <BottomTab />
      </div>
    </div>
  );
}
