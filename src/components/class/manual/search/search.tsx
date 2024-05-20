"use client";
import styles from "@/components/class/manual/search/search.module.css";
import { useRouter } from "next/navigation";

export default function Search({ search_content, tag, id }: any) {
  const router = useRouter();

  return (
    <input
      placeholder="검색할 내용을 입력해주세요."
      className={styles.input}
      onKeyDown={(e: any) => {
        if (e.key == "Enter" && e.target.value.trim() == "") {
          router.push(`/class/${id}/manual/tags/all/search/all`);
        } else if (e.key == "Enter" && e.target.value.trim() !== "") {
          router.push(
            `/class/${id}/manual/tags/${tag}/search/${encodeURIComponent(
              e.target.value
            )}`
          );
        }
      }}
      onKeyUp={(e: any) => {}}
      defaultValue={
        decodeURIComponent(search_content) === "all"
          ? ""
          : decodeURIComponent(search_content)
      }
    />
  );
}
