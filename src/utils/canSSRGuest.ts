import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

//funcao para paginas que so podem ser acesadas por visitantes
export function canSSRGuest<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>) {
 return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

  const cookies = parseCookies(ctx);

  //Se o usuario tentar logar a pagina mas ja tiver lçogado redirecionamos
  if (cookies['@nextauth.token']) {
   return {
    redirect: {
     destination: '/dashboard',
     permanent: false,
    }
   }
  }
  return await fn(ctx);
 }
}