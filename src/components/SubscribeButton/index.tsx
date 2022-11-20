import { useSession, signIn } from 'next-auth/react'
import React from 'react'
import styles from './styles.module.scss'

export default function SubscribeButton({ priceId }: { priceId: string }) {
  const { data: session } = useSession()
  function handleSubscribe() {
    if (!session) {
      signIn('github')
    }
  }
  return (
    <button onClick={handleSubscribe} className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}
