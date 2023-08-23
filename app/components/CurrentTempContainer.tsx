import React from "react";
import { GetWeatherData } from "../types/apiResponses";
import AutoUpdateButton from "./AutoUpdateButton";

interface CurrentTempContainerProps {
  weatherData: GetWeatherData | null;
  isAutoUpdateOn: boolean;
  setIsAutoUpdateOn: React.Dispatch<React.SetStateAction<boolean>>;
  lastFetchedTimestamp: number | null;
}

const CurrentTempContainer: React.FC<CurrentTempContainerProps> = ({
  weatherData,
  isAutoUpdateOn,
  setIsAutoUpdateOn,
  lastFetchedTimestamp,
}) => {
  const cityName = "New York";

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const { current_weather, timezone } = weatherData;
  const { time, temperature } = current_weather;

  return (
    <div>
      <p>Last fetched: {lastFetchedTimestamp}</p>
      <p>
        Last measured: {time} {timezone}
      </p>
      <h3>{cityName}</h3>
      <h2>{temperature}°C</h2>
      <span>Auto-Update:</span>
      <AutoUpdateButton
        isAutoUpdateOn={isAutoUpdateOn}
        setIsAutoUpdateOn={setIsAutoUpdateOn}
      />
    </div>
  );
};

export default CurrentTempContainer;
