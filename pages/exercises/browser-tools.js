import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Card } from '../../components/card/card';

export default function BrowserToolPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Browser tools exercise</title>
        <meta name="description" content="Browser tools exercise for accessibility" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exercise 1: Browser tools
        </h1>

        {/* Heading exercise */}
        <section>
          <h4>This is a heading</h4>
          <h6>This is also a heading</h6>
          <h3>But are these headings in the right order?</h3>
          <h2>Maybe, maybe not...</h2>
        </section>

        <section>
          <h2>This is a grid layout</h2>
          <Card title='Title' description='This is a description' />
          <Card title='Titles are great' description='This is another description' />
          <Card title='Best Title' description='Not another description' />
        </section>
      </main>
    </div>
  )
}
