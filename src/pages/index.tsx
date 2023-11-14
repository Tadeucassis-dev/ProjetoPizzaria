import Head from 'next/head';
import { useContext, FormEvent, useState } from 'react';
import logoImg from '../../public/logo.svg';
import Image from 'next/image';
import styles from '../../styles/home.module.scss';
import { Input } from './components/ui/input';
import { Button } from './components/ui/Button';
import Link from 'next/link';
import { AuthContext } from './contexts/AuthContext';

export default function Home() {
 const { signIn } = useContext(AuthContext)

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [loading, setLoading] = useState(false)

 async function handleLogin(event: FormEvent) {
  event.preventDefault();

  let data = {
   email,
   password
  }

  await signIn(data)
 }

 return (
  <>
   <Head>
    <title>SujeitoPizza - faça seu login</title>
   </Head>
   <div className={styles.containerCenter}>
    <Image src={logoImg} alt="Logo Sujeito Pizzaria" />

    <div className={styles.login}>
     <form onSubmit={handleLogin}>
      <Input
       placeholder='Digite seu email'
       type="text"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />

      <Input
       placeholder='Sua senha'
       type='password'
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />

      <Button
       type="submit"
       loading={false}
      >
       Acessar
      </Button>

     </form>
     <Link href="/signup" legacyBehavior>
      <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
     </Link>
    </div>
   </div>
  </>
 )
}

