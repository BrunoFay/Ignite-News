import Head from 'next/head'
import Image from 'next/image'
import SubscribeButton from '../components/SubscribeButton'
import ManImage from '../public/images/manHomePage.svg'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title> Home | Ig News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9,90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <Image src={ManImage} alt="Man coding" />
      </main>
    </>
  )
}
