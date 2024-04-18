import styles from "@/components/class/view/class/view.module.css";
import Image from "next/image";
import Link from "next/link";
import trash from "@/../public/icons/delete.svg";

export default function ClassView({
  name,
  image,
  id,
  delopt,
}: {
  name: string;
  image: string;
  id: string;
  delopt: boolean;
}) {
  return (
    <div className={styles.class}>
      <div className={styles.class_info}>
        <Image
          className={styles.class_img}
          src={image || ""} //image
          alt="class-img"
          width={48}
          height={48}
        />
        <p className={styles.class_name}>{name}</p>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <form
          style={delopt ? {} : { display: "none" }}
          method="POST"
          action="/api/class/delete"
        >
          <button className={styles.class_button_del} name="id" value={id}>
            <Image className={styles.icon} src={trash} alt="delete icon" />
          </button>
        </form>
        <Link
          className={styles.class_button}
          href={"/class/" + id + "/students"}
        ></Link>
      </div>
    </div>
  );
}
