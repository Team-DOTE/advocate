import type { Metadata } from "next";
import "./globals.css";
import AuthSession from "@/provider/AuthSession";
import ToastProvider from "@/provider/ToastProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://dote-advocate.vercel.app"),
  title: "advocate",
  description: "특수교육의 새로운 패러다임을 열다.",
  manifest: "/manifest.webmanifest",
  themeColor: "#fafafa",
  openGraph: {
    title: "advocate",
    description: "특수교육의 새로운 패러다임을 열다.",
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
      <body>
        <AuthSession>
          <ToastProvider>{children}</ToastProvider>
        </AuthSession>
      </body>
    </html>
  );
}
