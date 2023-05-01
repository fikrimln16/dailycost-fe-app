import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "./LineChart.css"

const LineChart = ({ data, options }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

    return () => {
      chart.destroy();
    };
  }, [data, options]);

  return (
   <div className='bar'>
      <canvas ref={canvasRef}/>
   </div>
  );
};

export default LineChart;
