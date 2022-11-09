import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export default function SigningButton() {
  const isUserLoggedIn = false
  return isUserLoggedIn ? (
    <button className={styles.singInButton}>
      <FaGithub color="#04d361" />
      Bruno fay
      <FiX className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button className={styles.singInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}
