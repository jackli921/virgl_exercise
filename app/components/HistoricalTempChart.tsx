import React from "react";
import { Line } from "react-chartjs-2";
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
  Tooltip
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

  const options = {
    maintainAspectRatio: true, // Allow chart to take up full container width
    responsive: true, // Enable chart responsiveness
    plugins: {
      legend: true,
      tooltip: true, // Enable tooltips
    },
    scales: {
      y: {
        min: 10,
        max: 35,
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      }
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
    labels: time,
    datasets: [
      {
        label: "5 Day Temp Forecast",
        data: temperature_2m,
        backgroundColor: "blue",
        borderColor: "black",
        pointBorderColor: "aqua",
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ width: "80%" }}>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default HistoricalTempChart;