"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import SaveButton from "./components/SaveButton";
import ShowButton from "./components/ShowButton";
import SavedDataContainer from "./components/SavedDataContainer";
import CurrentTempContainer from "./components/CurrentTempContainer";
import { GetWeatherData, WeatherDataItem } from "./types/apiResponses";
import { fetchData } from "./utils/fetchData";
import HistoricalTempChart from "./components/HistoricalTempChart";

export default function Home() {

  const [data, setData] = useState<GetWeatherData | null>(null);
  const [isAutoUpdateOn, setIsAutoUpdateOn] = useState(true);
  const [showUserSavedData, setShowUserSavedData] = useState(false);
  const [userSavedData, setUserSavedData] = useState<WeatherDataItem[] | null>(null);
  const [lastFetchedTimestamp, setLastFetchedTimestamp] = useState<
    string | null
  >(null);

  useEffect(() => {
    async function fetchDataAndUpdate() {
      try {
        const newData = await fetchData(); // Use the fetchData function
        setData(newData);
        setLastFetchedTimestamp(new Date().toLocaleString());

      } catch (error) {
        // Handle error
      }
    }
    fetchDataAndUpdate();

    if (isAutoUpdateOn) {
      const interval = setInterval(fetchDataAndUpdate, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoUpdateOn]);
  
  return (
    <main className={styles.main}>
      <div className={styles.topContainer}>
        <CurrentTempContainer
          weatherData={data}
          isAutoUpdateOn={isAutoUpdateOn}
          setIsAutoUpdateOn={setIsAutoUpdateOn}
          lastFetchedTimestamp={lastFetchedTimestamp}
        />
      </div>

      <div className={styles.midContainer}>
        <HistoricalTempChart weatherData={data ? data.hourly : null} />
      </div>

      <div className={styles.bottomContainer}>
        <SavedDataContainer showUserSavedData={showUserSavedData} userSavedData={userSavedData} />
      </div>

      <div className={styles.buttonContainer}>
        <ShowButton
          showUserSavedData={showUserSavedData}
          setShowUserSavedData={setShowUserSavedData}
        />
        <SaveButton
          weatherData={data}
          userSavedData={userSavedData}
          setUserSavedData={setUserSavedData}
        />
      </div>
    </main>
  );
}