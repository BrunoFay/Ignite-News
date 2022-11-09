import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SubscribeButton from '../components/SubscribeButton'
import { stripe } from '../libs/stripe'
import ManImage from '../public/images/manHomePage.svg'
import styles from '../styles/home.module.scss'

interface HomeProps {
  product: {
    priceId: string
    amount: string
  }
}
export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image src={ManImage} alt="Man coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1M2K0ECE9RrEGdXN0uLeWIK0', {
    expand: ['product'],
  })
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount! / 100),
  }
  return {
    props: {
      product,
    },
  }
}
