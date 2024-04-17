import styles from "@/components/student/student.module.css";
import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/utils/database";

export default function Student({
  name,
  image,
  id,
}: {
  name: string;
  image: string;
  id: string;
}) {
  return (
    <Link href={"#"} className={styles.student}>
      <div className={styles.student_info}>
        <Image
          className={styles.profile}
          src={image} //image
          alt="students-img"
          width={48}
          height={48}
        />
        <p className={styles.name}>{name}</p>
      </div>
    </Link>
  );
}
