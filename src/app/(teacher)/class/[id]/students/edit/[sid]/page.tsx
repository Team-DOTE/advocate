import ClassHeader from "@/components/class/header/header";
import ClassInput from "@/components/class/input/input";
import ClassWrap from "@/components/class/wrap/wrap";
import styles from "@/app/(teacher)/class/[id]/students/edit/[sid]/page.module.css";
import ClassButton from "@/components/class/button/button";
import { ObjectId } from "mongodb";
import { connectDB } from "@/utils/database";
import ClassTextarea from "@/components/class/textarea/textarea";
export default async function Edit({
  params,
}: {
  params: { id: string; sid: string };
}) {
  var now = new Date();
  var seconds = now.getSeconds();
  var profile;
  const domain = "https://dote-advocate.vercel.app/profile/";
  if (seconds % 3 == 0) {
    profile = domain + "profile0.png";
  } else if (seconds % 3 == 1) {
    profile = domain + "profile1.png";
  } else if (seconds % 3 == 2) {
    profile = domain + "profile2.png";
  }
  let db = (await connectDB).db("advocate");
  let student = await db
    .collection("student")
    .find({ _id: new ObjectId(params.sid) })
    .toArray();
  const convertDateFormat = (dateString: any) => {
    const [yearPart, monthPart, dayPart] = dateString
      .split(/년 |월 |일/)
      .filter(Boolean);
    const year = yearPart.trim();
    const month = String(monthPart.trim()).padStart(2, "0");
    const day = String(dayPart.trim()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  /*const handlePress = (e: any) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
          setInputValue(e.target.value);
        }
      };
      useEffect(() => {
        if (inputValue.replace(/-/g, "").length === 10) {
          setInputValue(
            inputValue
              .replace(/-/g, "")
              .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
          );
        }
        if (inputValue.replace(/-/g, "").length === 11) {
          setInputValue(
            inputValue
              .replace(/-/g, "")
              .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
          );
        }
        if (inputValue.replace(/-/g, "").length <= 8) {
          setInputValue(inputValue.replace(/-/g, ""));
        }
      }, [inputValue]);*/
  return (
    <ClassWrap>
      <ClassHeader content="학생 추가" />
      <div className={styles.container}>
        <form action="/api/student/edit" method="POST">
          <ClassInput
            content="이름을 입력해주세요."
            name="name"
            placeholder="이름을 입력해주세요."
            defaultValue={student[0].name}
          />
          <p className={styles.content}>생년월일을 입력해주세요.</p>
          <input
            className={styles.date}
            type="date"
            name="birthdate"
            defaultValue={convertDateFormat(student[0].birthdate)}
            required
          />
          <ClassInput
            content="학교명을 입력해주세요."
            name="school"
            placeholder="학교명을 입력해주세요."
            defaultValue={student[0].school}
          />
          <ClassInput
            content="학년, 반, 번호를 입력해주세요."
            name="studentid"
            placeholder="G학년 C반 N번 (2학년 4반 27번)"
            defaultValue={student[0].studentid}
          />
          <p className={styles.content}>성별을 선택해주세요.</p>
          <select
            required
            className={styles.select}
            name="sex"
            defaultValue={student[0].sex}
          >
            <option value="" disabled hidden>
              성별
            </option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
          <p className={styles.content}>보호자 전화번호를 입력해주세요.</p>
          <input
            required
            name="telephone"
            type="text"
            className={styles.input}
            placeholder="010-1234-5678 (-없이 입력)"
            /*onChange={handlePress}
            value={inputValue}*/
            defaultValue={student[0].telephone}
          />
          <ClassInput
            content="장애사항을 입력해주세요."
            name="disability"
            placeholder="장애사항을 알려주세요."
            defaultValue={student[0].disability}
          />
          <ClassTextarea
            content="특이사항을 입력해주세요."
            placeholder="특이사항을 입력해주세요."
            name="significant"
            defaultValue={student[0].significant}
          />
          <ClassInput
            content="학생 사진 주소를 입력해주세요."
            name="profile"
            placeholder="학생 사진 주소를 입력해주세요."
            defaultValue={student[0].profile}
          />
          <input
            style={{ display: "none" }}
            name="classid"
            defaultValue={params.id}
          />
          <input
            style={{ display: "none" }}
            name="studentsid"
            defaultValue={params.sid}
          />
          <ClassButton content="학생 정보 수정" />
        </form>
      </div>
    </ClassWrap>
  );
}
