import React from "react";

export default async function ClassRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: "calc(100% - 24px)" }}>
      {/* <div style={{ height: 24 }} /> */}
      {children}
    </div>
  );
}
