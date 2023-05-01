import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Categories'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Values'
            }
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={canvasRef} />;
};

export default BarChart;

// import React from 'react'
// import { Line, Bar} from 'react-chartjs-2'

// const BarChart = () => {

//    const state = {
//       labels: ["2023-01-01", "2023-01-02", "2023-01-03", "2023-01-04", "2023-01-05", "2023-01-06", "2023-01-06"],
//       datasets : [
//          {
//             label : "Data Mingguan",
//             backgroundColor : "rgba(75, 192, 192, 1)",
//             borderColor : "rgba(0, 0, 0, 1)",
//             borderWidth : 2,
//             data : [120000, 130000, 140000, 110000, 150000, 120000, 140000]
            
//          }
//       ]   
//    }

//    const options = {
//       plugins : {
//          legend: {
//             display: true,
//             position: "bottom"
//          },
//          title: {
//             text : "Pengeluaran Mingguan",
//             display : true,
//             fontSize : 20
//          }
//       }
//    }

//    return (
//       <div>
//          <Bar data={state}/>
//          {/* <Line options={options} data={state}/> */}
//       </div>
//    );
// }

// export default BarChart
