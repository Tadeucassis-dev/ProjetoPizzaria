import { useContext } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'


import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/AuthContext'
import Image from 'next/image';

export function Header() {

 const { signOut } = useContext(AuthContext)

 return (
  <header className={styles.headerContainer}>
   <div className={styles.headerContent}>
    <Link href="/dashboard">
     <Image src="/logo.svg" width={190} height={60} alt={''} />
    </Link>

    <nav className={styles.menuNav}>
     <Link href="/category">
     <text className='text'> Categoria</text>
     </Link>

     <Link href="/product">
      <text>Cardapio</text>
     </Link>

     <button onClick={signOut}>
      <FiLogOut color="#FFF" size={24} />
     </button>
    </nav>

   </div>
  </header>
 )
}