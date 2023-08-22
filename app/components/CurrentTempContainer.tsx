"use client";
import React, { useState, useEffect } from "react";
import AutoUpdateButton from "./AutoUpdateButton";
import { GetWeatherData } from "../types/apiResponses"; // Update the path to apiResponses

interface CurrentTempContainerProps {}

const CurrentTempContainer: React.FC<CurrentTempContainerProps> = () => {
  const cityName = "New York";
  const [data, setData] = useState<GetWeatherData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const newData = await res.json();
        setData(newData);
      } catch (error) {
        // Handle error
      }
    }

    fetchData();
  }, []);

  if (!data) {
    // Handle loading state
    return <p>Loading...</p>;
  }

  const { timezone } = data;
  const { temperature, time } = data.current_weather;

  return (
    <div>
      <p>
        {time} {timezone}
      </p>
      <h3>{cityName}</h3>
      <h2>{temperature}°C</h2>
      <span>Auto-Update:</span>
      <AutoUpdateButton />
    </div>
  );
};

export default CurrentTempContainer;
