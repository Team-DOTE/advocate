"use client";

import styles from "@/components/class/iep/result/result.module.css";
import ClassWrap from "@/components/class/wrap/wrap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import print from "@/../public/icons/print.svg";
import axios from "axios";
import IepReport from "../report/report";

interface Iep {
  _id: any;
  date: Date;
  student: string;
  subject: string;
  level: string;
  purpose: string;
  classid: string;
}

const IepResult = ({
  params,
  url,
}: {
  params: { iid: string };
  url?: string;
}) => {
  const [content, setContent] = useState<Iep>({
    _id: null,
    date: new Date(),
    student: "",
    subject: "",
    level: "",
    purpose: "",
    classid: "",
  });
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        `${url}/api/student/iep/get?iid=${params.iid}`
      );
      setContent(response.data.iepdata);
    }
    fetch();
  }, [params.iid, url]);
  return (
    <ClassWrap>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.title}>IEP 결과</p>
          <ReactToPrint
            trigger={() => (
              <Image className={styles.icon} src={print} alt="print icon" />
            )}
            content={() => ref.current}
          />
        </div>
        <div style={{ marginTop: -60 }}>
          <IepReport ref={ref} content={content} />
        </div>
      </div>
    </ClassWrap>
  );
};
export default IepResult;
