import Link from "next/link";
import styles from "@/components/manual/content/page.module.css";
import Tag from "@/components/manual/tag/page";

interface ContentProps {
  link: string;
  title: string;
  tag: string;
}

export default function Content({ link, title, tag }: ContentProps) {
  return (
    <div>
      
        <Link href={link} style={{textDecoration:"none"}}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
        
        <div className={styles.tag}>
          <Tag link={"none"} tag={tag} />
        </div>
        </div>
        </Link>
        
      </div>
    
  );
}
