import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AccordionGroup } from '../components/accordion/accordion-group';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Accordion exercise</title>
        <meta name="description" content="Accordion exercise for accessibility" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exercise 2: Accordion
        </h1>
        <AccordionGroup />
      </main>
    </div>
  )
}
