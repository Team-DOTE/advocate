import styles from "@/app/(parent)/messages/page.module.css";
import ParentHeader from "@/components/parent/header/header";
import ParentMessageUser from "@/components/parent/message/user/user";

export default function Messages() {
  return (
    <div>
      <ParentHeader content="메세지" />
      <ParentMessageUser
        name={"황석준 보호자"}
        content={"석준이는 응애에요."}
        time={"오후 10:00"}
        href="messages/1"
      />
    </div>
  );
}
