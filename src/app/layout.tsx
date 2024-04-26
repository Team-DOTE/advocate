import type { Metadata } from "next";
import "./globals.css";
import AuthSession from "@/provider/AuthSession";
import ToastProvider from "@/provider/ToastProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://dote-advocate.vercel.app"),
  title: "advocate",
  description: "특수교육의 새로운 패러다임을 열다.",
  manifest: "https://dote-advocate.vercel.app/manifest.webmanifest",
  openGraph: {
    title: "advocate",
    description: "특수교육의 새로운 패러다임을 열다.",
    url: "https://dote-advocate.vercel.app",
    images: [{ url: "" }],
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    other: [
      {
        url: "/pwa/splash/iphone5_splash.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/pwa/splash/iphone6_splash.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/pwa/splash/iphoneplus_splash.png",
        media:
          "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/pwa/splash/iphonex_splash.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/pwa/splash/iphonexr_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/pwa/splash/iphonexsmax_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/pwa/splash/ipad_splash.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/pwa/splash/ipadpro1_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/pwa/splash/ipadpro3_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/pwa/splash/ipadpro2_splash.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
    ],
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
