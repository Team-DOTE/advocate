import Navbar from "@/components/navbar/navbar";

export default function ClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Navbar />
      <div style={{ marginLeft: "30px" }}></div>
      {children}
    </div>
  );
}
