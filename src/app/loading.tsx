import Image from "next/image";
import loading from "@/../public/loading.gif";

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image width={100} height={100} src={loading} alt="loading" />
    </div>
  );
}
