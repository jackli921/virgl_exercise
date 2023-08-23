"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import SaveButton from "./components/SaveButton";
import ShowButton from "./components/ShowButton";
import CurrentTempContainer from "./components/CurrentTempContainer";
import { GetWeatherData } from "./types/apiResponses";
import { fetchData } from "./utils/fetchData";
import HistoricalTempChart from "./components/HistoricalTempChart";

export default function Home() {

  const [data, setData] = useState<GetWeatherData | null>(null);
  const [isAutoUpdateOn, setIsAutoUpdateOn] = useState(true);
  const [lastFetchedTimestamp, setLastFetchedTimestamp] = useState<
    number | null
  >(null);

  useEffect(() => {
    async function fetchDataAndUpdate() {
      try {
        const newData = await fetchData(); // Use the fetchData function
        setData(newData);
        setLastFetchedTimestamp(Math.floor(Date.now() / 1000));
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

  console.log("isAutoUpdateOn:", isAutoUpdateOn);
  console.log("last fetched:", lastFetchedTimestamp);
  console.log(data);
  
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
        <HistoricalTempChart 
          weatherData={data ? data.hourly: null}
        />
      </div>

      <div className={styles.bottomContainer}>bottom</div>

      <div className={styles.buttonContainer}>
        <ShowButton />
        <SaveButton />
      </div>
    </main>
  );
}