"use client"

import { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import styles from "@/components/class/evaluate/graph/graph.module.css"

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

export default function Graph({
  title,
  dates,
  content,
  
}:{
  title:any;
  dates:any;
  content:any;

}) {
  const chartRef:any = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const style = getComputedStyle(document.body);
    const graphcolor = style.getPropertyValue('--graph-color');
    
    const config:any = {
      type: 'line', 
      data: {
        labels: dates,
        datasets: [{
          label: '성취도',
          data: content,
          fill: false,
          backgroundColor: graphcolor,
          borderColor: graphcolor,
          borderWidth: 3
        }]
      },
      options: {
        layout: {
          padding: {
            top: 10,
            bottom: 20,
            left: 20,
            right: 20
          }
        },
        scales: {
          x: {
            type: 'category',
            position: 'bottom', 
          },
          y: {
            type: 'linear',
            beginAtZero: true,
            max: 100,
            position: 'left'
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            align: 'end'
          }
        }
      }
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
}, );

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <canvas ref={chartRef} className={styles.chart}></canvas>
    </div>
  );
}