import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'
import styles from './styles.module.scss'
import SigningButton from '../SigningButton'
import { ActiveLink } from '../ActiveLink'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="ig news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            Home
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            Post
          </ActiveLink>
        </nav>
        <SigningButton />
      </div>
    </header>
  )
}
