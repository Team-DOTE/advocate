"use client";
import styles from "@/components/students/students.module.css";
import Image from "next/image";
import Link from "next/link";
import profile1 from "@/../public/profile/profile1.png";
import { useRouter } from "next/navigation";

export default function Student({
  name,
  image,
  id,
}: {
  name: string;
  image: string;
  id: string;
}) {
  const router = useRouter();
  console.log(router);
  const newUrl = `/details/`;
  return (
    <div className={styles.students}>
      <div className={styles.students_info}>
        <Image
          className={styles.students_img}
          src={image} //image
          alt="students-img"
          width={48}
          height={48}
        />
        <p className={styles.students_name}>{name}</p>
      </div>
      <Link className={styles.students_button} href="">
        학생 설정
      </Link>
    </div>
  );
}
