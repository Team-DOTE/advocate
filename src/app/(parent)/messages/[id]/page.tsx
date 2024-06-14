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
        <Image
          className={styles.profile}
          src={"https://dote-advocate.vercel.app/profile/sungmin.png"}
          width={48}
          height={48}
          alt="profile"
        />
        <p className={styles.name}>조성민 선생님</p>
      </div>
      <div className={styles.messages}>
        <ParentOtherMessage
          content={"생성된 IEP 확인 부탁드립니다."}
          time={"오후 02:21"}
        />
        <ParentMessageDate date={"2024년 6월 3일 (월)"} />
        <ParentMyMessage content={"네 알겠습니다."} time={"오후 04:20"} />
        <ParentOtherMessage
          content={"교육 계획을 위해 진호 기초조사서 작성을 부탁드립니다."}
          time={"오후 03:30"}
        />
        <ParentOtherMessage
          content={"안녕하세요. 진호 담당교사입니다."}
          time={"오후 03:30"}
        />
        <ParentMessageDate date={"2024년 5월 31일 (금)"} />
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
