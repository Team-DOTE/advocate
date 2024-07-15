"use client";
import EvaluateView from "@/components/class/view/evaluate/view";
import { useState } from "react";
import styles from "@/components/class/evaluate/filter/filter.module.css";

export default function FilterEvaluate({ evaluates }: { evaluates: any }) {
  const date = new Date();
  const Converteddate = `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, "0")}월 ${String(date.getDate()).padStart(2, "0")}일`;
  
  const [filterState, setFilterState] = useState(0);

  const filteredEvaluates = evaluates.filter((evaluate:any) => {
    if (filterState === 1) {
      return Converteddate > evaluate.enddate;
    } else if (filterState === 2) {
      return Converteddate <= evaluate.enddate;
    }
    return true; 
  });

  return (
    <div>
      <div className={styles.btn_wrap}>
        <button
          onClick={() => setFilterState(2)}
          className={filterState === 2 ? styles.btn_selected : styles.btn}
        >
          평가 중인 항목
        </button>
        <button
          onClick={() => setFilterState(1)}
          className={filterState === 1 ? styles.btn_selected : styles.btn}
        >
          평가가 완료된 항목
        </button>
      </div>

      {filteredEvaluates.length > 0 ? (
        filteredEvaluates.map((evaluate:any, index:number) => (
          <div key={index}>
            <EvaluateView
              subject={evaluate.subject}
              startdate={evaluate.startdate}
              enddate={evaluate.enddate}
              studentid={evaluate.studentid}
              classid={evaluate.classid}
              id={evaluate._id.toString()}
            />
          </div>
        ))
      ) : (
        <div className={styles.none}>평가 항목이 존재하지 않습니다.</div>
      )}
    </div>
  );
}
