import styles from "@/app/(teacher)/class/[id]/messages/[mid]/page.module.css";
import ClassMessageDate from "@/components/class/message/date/date";
import ClassMyMessage from "@/components/class/message/my/my";
import ClassOtherMessage from "@/components/class/message/other/other";
import ClassWrap from "@/components/class/wrap/wrap";
import Image from "next/image";
import profile0 from "@/../public/profile/profile0.png";
import arrow_up from "@/../public/icons/arrow-up-20.svg";

export default function Messages() {
  return (
    <ClassWrap>
      <div className={styles.user}>
        <Image className={styles.profile} src={profile0} alt="profile" />
        <p className={styles.name}>황석준 보호자</p>
      </div>
      <div className={styles.messages}>
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassMessageDate date={"2024년 5월 24일 (금)"} />
        <ClassMyMessage content={"안녕하세요? \n 안녕"} time={"오후 08:11"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ClassMyMessage content={"안녕하세요? \n 안녕"} time={"오후 08:11"} />
        <ClassMessageDate date={"2024년 5월 24일 (금)"} />
      </div>
      <div className={styles.wrap}>
        <input className={styles.input}></input>
        <div className={styles.enter}>
          <Image className={styles.arrow} src={arrow_up} alt="arrow_up" />
        </div>
      </div>
    </ClassWrap>
  );
}
