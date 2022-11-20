import { useSession, signIn } from 'next-auth/react'
import React from 'react'
import { getStripeJs } from '../../libs/stripe-frontend'
import styles from './styles.module.scss'

export default function SubscribeButton({ priceId }: { priceId: string }) {
  const { data: session } = useSession()

  async function createSubscribe() {
    const response = await fetch('http://localhost:3000/api/subscribe', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    return response.json()
  }

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
    } else {
      try {
        const { sessionId } = await createSubscribe()
        const stripe = await getStripeJs()
        await stripe?.redirectToCheckout({ sessionId })
      } catch (err: any) {
        alert(err?.message)
      }
    }
  }
  return (
    <button onClick={handleSubscribe} className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}
