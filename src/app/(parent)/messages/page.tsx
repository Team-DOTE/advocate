import styles from "@/app/(parent)/messages/page.module.css";
import ParentMessageView from "@/components/parent/message/view/view";
import Image from "next/image";
import chat_add from "@/../public/icons/chat-add.svg";

export default function Messages() {
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.title}>메세지</p>
        <Image
          className={styles.icon}
          src={chat_add}
          alt="add icon"
          width={20}
          height={20}
        />
      </div>
      <ParentMessageView
        name={"조성민 선생님"}
        content={"생성된 IEP 확인 부탁드립니다."}
        time={"오후 02:21"}
        href="messages/1"
      />
    </div>
  );
}
