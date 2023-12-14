import Head from 'next/head'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { Header } from '../components/Header'
import { Text, VStack } from '@chakra-ui/react'

export default function Dashboard() {
 return (
  <>

   <Head>
    <title>Painel - Sujeito Pizzaria</title>
   </Head>
   <Header />
   <Text
    justifyContent={'center'}
    textAlign={'center'}
    color={'white'}
    fontSize={40}
    mt={'10rem'}
   >
    painel
   </Text>
  </>
 )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

 return {
  props: {}
 }
})