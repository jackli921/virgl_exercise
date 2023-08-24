import React from "react";
import { GetWeatherData } from "../types/apiResponses";
import AutoUpdateButton from "./AutoUpdateButton";

interface CurrentTempContainerProps {
  weatherData: GetWeatherData | null;
  isAutoUpdateOn: boolean;
  setIsAutoUpdateOn: React.Dispatch<React.SetStateAction<boolean>>;
  lastFetchedTimestamp: string | null;
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
  const unixTimestamp = new Date(time).getTime() / 1000; // Convert to seconds

  // Convert Unix Timestamp to Human-Readable Date and Time
  const formattedDate = new Date(unixTimestamp * 1000).toLocaleString();
  return (
    <div>
      <p>Last fetched: {lastFetchedTimestamp}</p>
      <p>
        Last measured: {formattedDate}
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
