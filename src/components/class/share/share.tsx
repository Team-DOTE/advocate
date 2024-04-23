"use client";

import styles from "@/components/class/share/share.module.css";
import Image from "next/image";
import share from "@/../public/icons/share.svg";
import { usePathname } from "next/navigation";

export default function ClassShare() {
  const router = usePathname();
  function copyPath() {
    window.navigator.clipboard
      .writeText(`https://dote-advocate.vercel.app` + router)
      .then(() => {
        alert("링크가 복사되었습니다!");
      });
  }
  return (
    <Image
      onClick={copyPath}
      className={styles.icon}
      src={share}
      alt="logout icon"
    />
  );
}
