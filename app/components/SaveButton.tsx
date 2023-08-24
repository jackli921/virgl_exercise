"use client";

import { GetWeatherData, WeatherDataItem } from "../types/apiResponses";


interface SaveButtonDataProps {
  weatherData: GetWeatherData | null;
  userSavedData: WeatherDataItem[] | null;
  setUserSavedData: React.Dispatch<
    React.SetStateAction<WeatherDataItem[] | null>
  >;
}

const SaveButton: React.FC<SaveButtonDataProps> = ({
  weatherData,
  userSavedData,
  setUserSavedData,
}) => {

  
  function saveData() {
      

    if (weatherData) {
      const obj = {
        currentTimestamp: Math.floor(Date.now() / 1000),
        temperature: weatherData.current_weather.temperature,
      };


      if (userSavedData) {
        if (userSavedData.length < 5) {
          setUserSavedData((prevData) => [...(prevData ?? []), obj]);
        } else {
          setUserSavedData((prevData) => [...(prevData?.slice(1) ?? []), obj]);
        }
      }
      else{
        setUserSavedData((prevData) => [...(prevData ?? []), obj]);
      }
    }
  }
  
  return (
    <div>
      <button onClick={() => saveData()}>Save Current Temperature</button>
    </div>
  );
};

export default SaveButton;
