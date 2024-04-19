"use client";

import styles from "@/components/class/logout/logout.module.css";
import Image from "next/image";
import logout from "@/../public/icons/log-out.svg";
import { signOut } from "next-auth/react";

export default function ClassLogout() {
  return (
    <Image
      className={styles.icon}
      onClick={() => signOut()}
      src={logout}
      alt="logout icon"
    />
  );
}
