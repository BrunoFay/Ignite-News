import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function SigningButton() {
  const { data: session } = useSession()
  return session ? (
    <button className={styles.singInButton}>
      <FaGithub onClick={() => signOut()} color="#04d361" />
      Bruno fay
      <FiX className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button onClick={() => signIn()} className={styles.singInButton}>
      <FaGithub color="#A717EB" />
      Sign in with Github
    </button>
  )
}
