import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Accessibility Workshop</title>
        <meta name="description" content="Accessibility workshop innit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Accessibility Workshop
        </h1>

        <h2>Exercises</h2>
        <ol>
          <li><Link href='./exercises/browser-tools'>Browser Tools</Link></li>
          <li><Link href='./exercises/accordion'>Accordion</Link></li>
        </ol>
      </main>
    </div>
  )
}
