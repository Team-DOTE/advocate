import styles from "@/components/navbar/menu/menu.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({
  src,
  alt,
  title,
  link,
  name,
}: {
  src: any;
  alt: string;
  title: string;
  link: string;
  name: string;
}) {
  const pathname = usePathname();
  const path = pathname.split("/")[3];
  return (
    <Link
      href={link}
      className={
        path == name ? styles.menu_button_selected : styles.menu_button
      }
    >
      <Image className={styles.menu_icon} src={src} alt={alt} />
      <p className={styles.menu_text}>{title}</p>
    </Link>
  );
}
