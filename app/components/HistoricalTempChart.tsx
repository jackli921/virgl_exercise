import React from "react";
import { Line } from "react-chartjs-2";
import styles from "../page.module.css" 
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
);

import { Hourly } from "../types/apiResponses";

interface HistoricalTempChartProps {
  weatherData?: Hourly | null;
}

const HistoricalTempChart: React.FC<HistoricalTempChartProps> = ({
  weatherData,
}) => {
  if (!weatherData || !weatherData.time || !weatherData.temperature_2m) {
    return <p>Loading chart data...</p>;
  }

  const { time, temperature_2m } = weatherData;

  // Extract data for the first 5 days
  const timeForFirst5Days = time.slice(0, 120); // Assuming each day has 24 entries
  const temperatureForFirst5Days = temperature_2m.slice(0, 120); // Assuming each day has 24 entries

  const options = {
    maintainAspectRatio: true, // Allow chart to take up full container width
    responsive: true, // Enable chart responsiveness
    plugins: {
      legend: {
        display: true, // Display the legend
        position: "top", // You can adjust the position
      },
      tooltip: true, // Enable tooltips
      zoom: {
        zoom: {
          wheel: {
            enable: true,
          },
          pinch: {
            enable: true,
          },
          mode: "xy",
        },
      },
    },
    scales: {
      y: {
        min: 10,
        max: 35,
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
    },
    elements: {
      line: {
        tension: 0.1, // Reduce the tension for a thinner line
        borderDash: [5, 5], // Use a dashed line style
        borderWidth: 1, // Set the width of the line
      },
    },
  };

  const data = {
    labels: timeForFirst5Days,
    datasets: [
      {
        label: "5 Day Temp Forecast",
        data: temperatureForFirst5Days,
        backgroundColor: "blue",
        borderColor: "black",
        pointBorderColor: "aqua",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <Line data={data} options={options}></Line>
    </div>
  );
};


export default HistoricalTempChart;
