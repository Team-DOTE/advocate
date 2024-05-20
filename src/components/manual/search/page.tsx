"use client";
import styles from "@/components/manual/search/page.module.css";
import { useRouter } from "next/navigation";

export default function Search({ search_content, tag, id }: any) {
  function characterCheck(e: any) {
    var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
    if (regExp.test(e.target.value)) {
      alert("특수문자는 입력하실 수 없습니다.");
      e.target.value = e.target.value.substring(0, e.target.value.length - 1); // 입력한 특수문자 한자리 지움
    }
  }
  const router = useRouter();
  return (
    <div>
      {search_content == "none" || search_content == "all" ? (
        <input
          className={styles.input}
          placeholder="검색할 내용을 입력해주세요."
          onKeyDown={(e: any) => {
            characterCheck(e);
            if (e.key == "Enter" && e.target.value.trim() !== "") {
              router.push(
                `/class/${id}/manual/tags/${tag}/search/${e.target.value}`
              );
            }
          }}
          onKeyUp={(e: any) => {
            characterCheck(e);
          }}
        />
      ) : (
        <input
          className={styles.input}
          placeholder="검색할 내용을 입력해주세요."
          onKeyDown={(e: any) => {
            characterCheck(e);
            if (e.key == "Enter" && e.target.value.trim() !== "") {
              router.push(
                `/class/${id}/manual/tags/${tag}/search/${e.target.value}`
              );
            }
          }}
          onKeyUp={(e: any) => {
            characterCheck(e);
          }}
          defaultValue={decodeURIComponent(search_content)}
        />
      )}
    </div>
  );
}
