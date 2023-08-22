// components/CurrentTempContainer.tsx

import React from "react";
import AutoUpdateButton from "./AutoUpdateButton";
import { GetWeatherData } from "../types/apiResponses"; // Update the path to apiResponses

interface CurrentTempContainerProps {
  data: GetWeatherData; // Define the prop type
}

const CurrentTempContainer: React.FC<CurrentTempContainerProps> = ({
  data,
}) => {
  const cityName = "New York";
  const {timezone} = data;
  const { temperature, time } = data.current_weather;


  return (
    <div>
      <p>{time} {timezone}</p>
      <h3>{cityName}</h3>
      <h2>{temperature}°C</h2>
      <span>Auto-Update:</span>
      <AutoUpdateButton />
    </div>
  );
};

export default CurrentTempContainer;
