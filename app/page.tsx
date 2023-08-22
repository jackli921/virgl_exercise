import Image from 'next/image'
import styles from './page.module.css'
import SaveButton from "./components/SaveButton";
import ShowButton from "./components/ShowButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topContainer}>Top</div>

      <div className={styles.midContainer}>mid</div>

      <div className={styles.bottomContainer}>bottom</div>

      <div className={styles.buttonContainer}>
        <ShowButton />
        <SaveButton />

      </div>
    </main>
  );
}
