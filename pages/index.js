import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>School Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <main className={`${styles.main}`}></main>
    </>
  );
}
