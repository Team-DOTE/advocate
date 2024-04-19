import styles from "@/app/class/[id]/iep/page.module.css";
import ClassButton from "@/components/class/button/button";
import ClassHeader from "@/components/class/header/header";
import ClassInput from "@/components/class/input/input";
import ClassWrap from "@/components/class/wrap/wrap";

export default function Iep() {
  return (
    <ClassWrap>
      <ClassHeader content="IEP 생성" />
      <form method="POST" action="">
        <ClassInput
          content="IEP 생성 대상 학생을 선택해주세요."
          name=""
          placeholder="학생을 선택해주세요."
        />
        <ClassInput
          content="IEP 생성 과목을 선택해주세요."
          name=""
          placeholder="IEP 생성 과목을 선택해주세요."
        />
        <ClassInput
          content="선택한 과목에 대한 학생의 현행 수준을 자세히 작성해주세요."
          name=""
          placeholder="선택한 과목에 대한 학생의 현행 수준을 자세히 작성해주세요."
        />
        <ClassInput
          content="교육 목적 및 기대 효과를 작성해주세요."
          name=""
          placeholder="교육 목적 및 기대 효과를 작성해주세요."
        />
        <ClassButton content="IEP 생성" />
      </form>
    </ClassWrap>
  );
}
