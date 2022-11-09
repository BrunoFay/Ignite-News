import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.svg'
import styles from './styles.module.scss'
import SigningButton from '../SigningButton'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="ig news" />
        <nav>
          <Link className={styles.active} href="#">
            Home
          </Link>
          <Link href="#">Post</Link>
        </nav>
        <SigningButton />
      </div>
    </header>
  )
}
