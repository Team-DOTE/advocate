"use client";
import styles from "@/components/manual/search/page.module.css";
import Image from "next/image";
import search from "@/../public/icons/search.svg";

export default function Search({ search_content, link }: any) {
  return (
    <div>
      {search_content == "none" ? (
        <div className={styles.search}>
          <div className={styles.icon}>
            <Image src={search} alt="Search Image" />
          </div>
          <input
            className={styles.input}
            placeholder="검색할 상황을 입력해주세요."
            onKeyDown={(e: any) => {
              if (e.key == "Enter") {
                if (link == "tag"){
                  window.location.href = `../search/${e.target.value}`;
                }
               
                else{
                  window.location.href = `./manual/search/${e.target.value}`;
                }
              }
            }}
          />
        </div>
      ) : (
        <div className={styles.search}>
          <div className={styles.icon}>
            <Image src={search} alt="Search Image" />
          </div>
          <input
            className={styles.input}
            placeholder="검색할 상황을 입력해주세요."
            onKeyDown={(e: any) => {
              if (e.key == "Enter") {
                
                  window.location.href = `./${e.target.value}`;

              }
            }}
            defaultValue={decodeURIComponent(search_content)}
          />
        </div>
      )}
    </div>
  );
}
