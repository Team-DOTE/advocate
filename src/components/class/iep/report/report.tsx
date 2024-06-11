"use client";

import styles from "@/components/class/iep/report/report.module.css";
import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";
import loading from "@/../public/loading.gif";
interface ReportProps {
  content: any;
}

const IepReport = forwardRef<HTMLDivElement, ReportProps>(
  ({ content }, ref) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
    return (
      <section ref={ref} className={styles.body}>
        {isClient && content._id !== null ? (
          <div>
            <div className={styles.page}>
              <div className={styles.title}>개별화교육계획서(IEP)</div>
              <div>
                <div className={styles.small_title_box}>1. 학생 인적사항</div>
                <table className={styles.table}>
                  <tr>
                    <th
                      scope="col"
                      style={{ width: "25%" }}
                      className={styles.th}
                    >
                      이름
                    </th>
                    <td
                      scope="col"
                      style={{ width: "25%" }}
                      className={styles.td}
                    >
                      ㅋ
                    </td>
                    <th
                      scope="col"
                      style={{ width: "25%" }}
                      className={styles.th}
                    >
                      생년월일
                    </th>
                    <td
                      scope="col"
                      style={{ width: "25%" }}
                      className={styles.td}
                    ></td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      style={{ width: "25%" }}
                      className={styles.th}
                    >
                      성별
                    </th>
                    <td
                      scope="col"
                      style={{ width: "25%" }}
                      className={styles.td}
                    ></td>
                    <th
                      scope="col"
                      style={{ width: "25%" }}
                      className={styles.th}
                    >
                      학년/반
                    </th>
                    <td
                      scope="col"
                      style={{ width: "25%" }}
                      className={styles.td}
                    ></td>
                  </tr>
                  <tr>
                    <th className={styles.th}>장애 유형/정도</th>
                    <td colSpan={3} className={styles.td}></td>
                  </tr>
                  <tr>
                    <th className={styles.th}>작성일</th>
                    <td colSpan={3} className={styles.td}></td>
                  </tr>
                </table>
              </div>

              <div style={{ height: "20px" }}></div>
              <div>
                <div className={styles.small_title_box}>2. 학생 현행 수준</div>
                <table className={styles.table}>
                  <tr>
                    <th className={styles.th}>과목/영역</th>
                    <th colSpan={2} className={styles.th}>
                      강점 및 지도점
                    </th>
                  </tr>
                  <tr>
                    <td
                      scope="col"
                      rowSpan={2}
                      style={{ width: "16%", padding: "200px 0px" }}
                      className={styles.td}
                    >
                      {content.subject}
                    </td>
                    <th
                      scope="col"
                      style={{ width: "6%", padding: "100px 12px" }}
                      className={styles.th}
                    >
                      강점
                    </th>
                    <td
                      scope="col"
                      style={{ width: "78%" }}
                      className={`${styles.nocenter} ${styles.td}`}
                    ></td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      style={{ padding: "100px 12px" }}
                      className={styles.th}
                    >
                      지도점
                    </th>
                    <td
                      scope="col"
                      className={`${styles.nocenter} ${styles.td}`}
                    ></td>
                  </tr>
                </table>
              </div>
            </div>
            <div className={styles.page}>
              <div style={{ margin: "80px" }}></div>
              <div>
                <div className={styles.small_title_box}>
                  3. 과목/영역별 개별화교육계획 및 평가
                </div>
                <table className={styles.table}>
                  <tr>
                    <th
                      scope="col"
                      style={{ width: "25%" }}
                      className={styles.th}
                    >
                      이름
                    </th>
                    <td colSpan={2} className={styles.td}></td>
                    <th
                      scope="col"
                      style={{ width: "18.75%" }}
                      className={styles.th}
                    >
                      담임
                    </th>
                    <td
                      scope="col"
                      style={{ width: "18.75%" }}
                      className={styles.td}
                    ></td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      style={{ width: "25%" }}
                      className={styles.th}
                    >
                      교육기간
                    </th>
                    <th
                      scope="col"
                      style={{ width: "18.75%" }}
                      className={styles.th}
                    >
                      시작일
                    </th>
                    <td
                      scope="col"
                      style={{ width: "18.75%" }}
                      className={styles.td}
                    ></td>
                    <th
                      scope="col"
                      style={{ width: "18.75%" }}
                      className={styles.th}
                    >
                      종료일
                    </th>
                    <td
                      scope="col"
                      style={{ width: "18.75%" }}
                      className={styles.td}
                    ></td>
                  </tr>
                  <tr>
                    <th className={styles.th}>과목/영역</th>
                    <td colSpan={4} className={styles.td}></td>
                  </tr>
                  <tr>
                    <th style={{ padding: "50px 0px" }} className={styles.th}>
                      교육목표
                    </th>
                    <td
                      colSpan={4}
                      className={`${styles.nocenter} ${styles.td}`}
                    ></td>
                  </tr>
                  <tr>
                    <th style={{ padding: "100px 0px" }} className={styles.th}>
                      교육방법
                    </th>
                    <td
                      colSpan={4}
                      className={`${styles.nocenter} ${styles.td}`}
                    ></td>
                  </tr>
                  <tr>
                    <th style={{ padding: "50px 0px" }} className={styles.th}>
                      평가계획
                    </th>
                    <td
                      colSpan={4}
                      className={`${styles.nocenter} ${styles.td}`}
                    ></td>
                  </tr>
                </table>
              </div>
              <div style={{ height: "20px" }}></div>
              <div>
                <div className={styles.small_title_box}>4. 가족지원방안</div>
                <table className={styles.table}>
                  <tr>
                    <th className={styles.th}>
                      가족 특성 및 지원이 필요한 내용
                    </th>
                    <th className={styles.th}>지원 방안</th>
                  </tr>
                  <tr>
                    <td
                      style={{ height: "250px", width: "50%" }}
                      className={`${styles.nocenter} ${styles.td}`}
                      id="가족 특성 및 지원이 필요한 내용"
                    ></td>
                    <td
                      style={{ height: "250px", width: "50%" }}
                      className={`${styles.nocenter} ${styles.td}`}
                      id="지원 방안"
                    ></td>
                  </tr>
                </table>
                <div style={{ height: "20px" }}></div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={loading} alt="loading" width={100} height={100} />
          </div>
        )}
      </section>
    );
  }
);

IepReport.displayName = "IepReport";

export default IepReport;
