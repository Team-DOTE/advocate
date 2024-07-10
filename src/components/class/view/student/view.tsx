import styles from "@/components/class/view/student/view.module.css";
import Image from "next/image";
import Link from "next/link";

export default function StudentView({
  name,
  image,
  id,
  classid,
  link
}: {
  name: string;
  image: string;
  id: string;
  classid: string;
  link: string
}) {
  return (
    <Link href={`/class/${classid}/${link}/${id}`} className={styles.student}>
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
