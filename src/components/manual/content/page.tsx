import Link from "next/link";
import styles from "@/components/manual/content/page.module.css";
import Tag from "@/components/manual/tag/page";

interface ContentProps {
  link: string;
  title: string;
  tag: string;
  id: string;
}

export default function Content({ link, title, tag, id }: ContentProps) {
  return (
    <div>
      
        <Link href={`/class/${id}/contents/${link}`} style={{textDecoration:"none"}}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
        
        <div className={styles.tag}>
          <Tag link={"none"} tag={tag} id="none" value="all"/>
        </div>
        </div>
        </Link>
        
      </div>
    
  );
}
