"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import styles from "@/components/class/evaluate/graph/graph.module.css";
import html2canvas from "html2canvas";
import print from "@/../public/icons/print.svg";
import Image from "next/image";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

export default function Graph({
  name,
  expired,
  first,
  final,
  maxcontent,
  title,
  dates,
  content,
}: {
  name: string;
  expired: boolean;
  first: boolean;
  final: number;
  maxcontent: number;
  title: string;
  dates: string[];
  content: number[];
}) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const graphWrapRef = useRef<HTMLDivElement | null>(null);

  const PrintDiv = (div: HTMLElement) => {
    html2canvas(div).then((canvas) => {
      const myImage = canvas.toDataURL();
      downloadURI(myImage, `${name}학생_${title}_chart.png`);
    });
  };

  const downloadURI = (uri: string, name: string) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
  };

  const onClick = () => {
    if (graphWrapRef.current) {
      PrintDiv(graphWrapRef.current);
    }
  };

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    const style = getComputedStyle(document.body);
    const graphColor = style.getPropertyValue("--graph-color");

    if (ctx) {
      const config: any = {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "성취도",
              data: content,
              fill: false,
              backgroundColor: graphColor,
              borderColor: graphColor,
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 10,
              bottom: 20,
              left: 20,
              right: 20,
            },
          },
          scales: {
            x: {
              type: "category",
              position: "bottom",
            },
            y: {
              type: "linear",
              beginAtZero: true,
              max: 105,
              position: "left",
            },
          },
          plugins: {
            legend: {
              position: "bottom",
              align: "end",
            },
          },
        },
      };

      const myChart = new Chart(ctx, config);

      return () => {
        myChart.destroy();
      };
    }
  }, [dates, content]);

  return (
    <div>
      <div ref={graphWrapRef} className={styles.graph_wrap}>
        <div
          className={styles.graph_title}
        >{`${name} 학생의 성취도 그래프`}</div>
        <div className={styles.graph_content}>
          <div className={styles.container}>
            <h1>{title}</h1>
            <div className={styles.chart_container}>
              <canvas ref={chartRef} className={styles.chart}></canvas>
            </div>
          </div>
        </div>
        {expired && (
          <div className={styles.expired_content}>
            <div className={styles.expired_achivement}>
              <div className={styles.expired_achivement_title}>
                최종 성취도:
              </div>
              <div className={styles.expired_achivement_content}>
                {first ? 0 : final}%
              </div>
            </div>
            <div className={styles.expired_achivement}>
              <div className={styles.expired_achivement_title}>
                최고 성취도:
              </div>
              <div className={styles.expired_achivement_content}>
                {first ? 0 : maxcontent}%
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.bottom} onClick={onClick}>
        <Image className={styles.icon} src={print} alt="print icon" />
        <div className={styles.print}>그래프 다운받기</div>
      </div>
    </div>
  );
}
