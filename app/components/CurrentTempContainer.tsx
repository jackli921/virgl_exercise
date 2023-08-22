// components/CurrentTempContainer.tsx
import React from "react";
import AutoUpdateButton from "./AutoUpdateButton";

const CurrentTempContainer: React.FC = () => {
  const currentTimestamp = "2022-01-01T15:00";
  const cityName = "Toronto";
  const temperature = "22°C";

  return (
    <div>
      <p>{currentTimestamp}</p>
      <h3>{cityName}</h3>
      <h2>{temperature}</h2>
      <span>Auto-update:</span>
      <AutoUpdateButton />
    </div>
  );
};

export default CurrentTempContainer;
