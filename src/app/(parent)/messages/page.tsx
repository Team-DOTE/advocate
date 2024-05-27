import styles from "@/app/(parent)/messages/page.module.css";
import ParentHeader from "@/components/parent/header/header";
import ParentMessageView from "@/components/parent/message/view/view";

export default function Messages() {
  return (
    <div>
      <ParentHeader content="메세지" />
      <ParentMessageView
        name={"황석준 보호자"}
        content={"석준이는 응애에요."}
        time={"오후 10:00"}
        href="messages/1"
      />
    </div>
  );
}
