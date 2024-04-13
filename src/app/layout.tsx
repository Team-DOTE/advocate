import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dote-advocate.vercel.app"),
  title: "advocate",
  description: "개별화교육계획을 수립하는 새로운 방법",
  openGraph: {
    title: "advocate",
    description: "개별화교육계획을 수립하는 새로운 방법",
    url: "https://dote-advocate.vercel.app",
    images: [{ url: "" }],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
