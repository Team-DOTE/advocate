import styles from "@/app/(parent)/messages/[id]/page.module.css";
import Image from "next/image";
import profile0 from "@/../public/profile/profile0.png";
import arrow_up from "@/../public/icons/arrow-up-20.svg";
import ParentMyMessage from "@/components/parent/message/my/my";
import ParentOtherMessage from "@/components/parent/message/other/other";
import ParentMessageDate from "@/components/parent/message/date/date";

export default function Messages({ params }: { params: { id: string } }) {
  return (
    <div style={{ height: "calc(100% - 90px)" }}>
      <div className={styles.user}>
        <Image className={styles.profile} src={profile0} alt="profile" />
        <p className={styles.name}>황석준 보호자</p>
      </div>
      <div className={styles.messages}>
        <ParentMyMessage content={"안녕하세요?"} time={"오후 08:11"} />
        <ParentOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ParentMessageDate date={"2024년 5월 24일 (금)"} />
        <ParentMyMessage content={"안녕하세요?"} time={"오후 08:11"} />
        <ParentOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ParentMessageDate date={"2024년 5월 24일 (금)"} />
        <ParentMyMessage content={"안녕하세요?"} time={"오후 08:11"} />
        <ParentOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ParentMessageDate date={"2024년 5월 24일 (금)"} />
        <ParentMyMessage content={"안녕하세요?"} time={"오후 08:11"} />
        <ParentOtherMessage content={"야옹"} time={"오후 08:12"} />
        <ParentMessageDate date={"2024년 5월 24일 (금)"} />
      </div>
      <div className={styles.wrap}>
        <input className={styles.input}></input>
        <div className={styles.enter}>
          <Image className={styles.arrow} src={arrow_up} alt="arrow_up" />
        </div>
      </div>
    </div>
  );
}
