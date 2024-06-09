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
        <Image
          className={styles.profile}
          src={"https://dote-advocate.vercel.app/profile/bonchan.png"}
          width={48}
          height={48}
          alt="profile"
        />
        <p className={styles.name}>김진호 보호자</p>
      </div>
      <div className={styles.messages}>
        <ClassMyMessage
          content={"생성된 IEP 확인 부탁드립니다."}
          time={"오후 02:21"}
        />
        <ClassMessageDate date={"2024년 6월 3일 (월)"} />
        <ClassOtherMessage content={"네 알겠습니다."} time={"오후 04:20"} />
        <ClassMyMessage
          content={"교육 계획을 위해 진호 기초조사서 작성을 부탁드립니다."}
          time={"오후 03:30"}
        />
        <ClassMyMessage
          content={"안녕하세요. 진호 담당교사입니다."}
          time={"오후 03:30"}
        />
        <ClassMessageDate date={"2024년 5월 31일 (금)"} />
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
