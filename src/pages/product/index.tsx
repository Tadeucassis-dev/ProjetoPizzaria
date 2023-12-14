

import { canSSRAuth } from "@/utils/canSSRAuth";
import { Heading } from "@chakra-ui/react";
import { Header } from "../components/Header";
import styles from "./styles.module.scss"
import { FiUpload } from "react-icons/fi";
import { ChangeEvent, useState } from "react";



export default function Product() {

 const [avatarUrl, setAvatarUrl] = useState('');
 const [imageAvatar, setImageAvatar] = useState<File | null>(null);
 function handleFile(e: ChangeEvent<HTMLInputElement>) {

  if (!e.target.files) {
   return;
  }

  const image = e.target.files[0];

  if (!image) {
   return;
  }

  if (image.type === 'image/jpeg' || 'image.type/png') {

   setImageAvatar(image);
   setAvatarUrl(URL.createObjectURL(e.target.files[0]))
  }

 }

 return (
  <>
   <Heading>
    <title>Novo produto - Sujeito Pizzaria</title>
   </Heading>
   <div>
    <Header />

    <main className={styles.container}>
     <h1>Novo produto</h1>

     <form className={styles.form}>

      <label className={styles.labelAvatar}>
       <span>
        <FiUpload size={30} color='#fff' />
       </span>

       <input type='file' accept='image/png, image/jpeg' onChange={handleFile} />

       {avatarUrl && (
        <svg className={styles.preview} width="250" height="250">
        <image href={avatarUrl} alt="Foto do produto" />
      </svg>
       )}


      </label>

      <select>
       <option>
        Bebidas
       </option>
       <option>
        Pizzas
       </option>
      </select>

      <input
       type="text"
       placeholder="Digite o nome do produto"
       className={styles.input}
      >
      </input>

      <input
       type="text"
       placeholder="Preço do produto"
       className={styles.input}
      >
      </input>

      <textarea
       className={styles.input}
       placeholder="Descreva seu produto"
      >

      </textarea>

      <button className={styles.buttonAdd} type="submit">
       Cadastrar
      </button>

     </form>
    </main>
   </div>
  </>
 )
}

export const getServerSideProps = canSSRAuth(async () => {
 return {
  props: {}
 }
})