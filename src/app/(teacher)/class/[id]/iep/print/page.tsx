"use client";

import Report from "@/components/class/report/report";
import { useRef, useEffect, useState } from "react";
import ReactToPrint from "react-to-print";

const App = () => {
  const [content, setContent] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("https://baconipsum.com/api/?type=all-meat&start-with-lorem=1")
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <div>
      <div>
        <h2>리포트 보기</h2>
        <ReactToPrint
          trigger={() => <button>리포트 출력</button>}
          content={() => ref.current}
        />
      </div>
      <div style={{ display: "none" }}>
        <Report ref={ref} content={content} />
      </div>
    </div>
  );
};
export default App;
