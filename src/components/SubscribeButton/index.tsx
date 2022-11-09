import React from 'react'
import styles from './styles.module.scss'

export default function SubscribeButton({ priceId }: { priceId: string }) {
  return <button className={styles.subscribeButton}>Subscribe now</button>
}
