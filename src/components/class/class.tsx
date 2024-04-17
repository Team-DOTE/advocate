import styles from "@/components/class/class.module.css";
import Image from "next/image";
import Link from "next/link";
import profile1 from "@/../public/profile/profile1.png";

export default function Class({
  name,
  image,
  id,
}: {
  name: string;
  image: string;
  id: string;
}) {
  return (
    <div className={styles.class}>
      <div className={styles.class_info}>
        <Image
          className={styles.class_img}
          src={image} //image
          alt="class-img"
          width={48}
          height={48}
        />
        <p className={styles.class_name}>{name}</p>
      </div>
      <Link className={styles.class_button} href={"/class/" + id + "/students"}>
        입장하기
      </Link>
    </div>
  );
}
