import Image from 'next/image'
import styles from './page.module.css'
import SaveButton from "./components/SaveButton";
import ShowButton from "./components/ShowButton";
import CurrentTempContainer from './components/CurrentTempContainer'
import { type GetWeatherData } from './types/apiResponses'

async function getData() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export default async function Home() {
   const data: GetWeatherData = await getData(); // Make sure to define the type here
  return (
    <main className={styles.main}>
      <div className={styles.topContainer}>
        Top
        <CurrentTempContainer data={data}/>
      </div>

      <div className={styles.midContainer}>mid</div>

      <div className={styles.bottomContainer}>bottom</div>

      <div className={styles.buttonContainer}>
        <ShowButton />
        <SaveButton />
      </div>
    </main>
  );
}
