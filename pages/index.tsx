import Head from 'next/head'
import styles from '../styles/Home.module.css'

const title: string= "My New Blog Support Typescript"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {title}
        </h1>
      </main>


    </div>
  )
}
