"use client";

import styles from "@/components/parent/bottomtab/bottomtab.module.css";
import messages from "@/../public/icons/messages.svg";
import students from "@/../public/icons/students.svg";
import settings from "@/../public/icons/setting.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function BottomTab() {
  return (
    <div className={styles.container}>
      <Tab href="/messages" icon={messages} content="메세지" />
      <Tab href="/students" icon={students} content="학생 관리" />
      <Tab href="/settings" icon={settings} content="설정" />
    </div>
  );
}

function Tab({
  href,
  icon,
  content,
}: {
  href: string;
  icon: any;
  content: string;
}) {
  const path = usePathname();
  return (
    <Link href={href} className={styles.wrap}>
      <Image
        style={href === path ? { opacity: 1 } : { opacity: 0.7 }}
        className={styles.icon}
        src={icon}
        alt="tab-icon"
      />
      <p
        style={href === path ? { color: "black" } : { color: "#707070" }}
        className={styles.content}
      >
        {content}
      </p>
    </Link>
  );
}
