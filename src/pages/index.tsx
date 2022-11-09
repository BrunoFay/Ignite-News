import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ig News</title>
      </Head>
      <h1 className={styles.test}>
        Hello <span>World</span>
      </h1>
    </>
  )
}
