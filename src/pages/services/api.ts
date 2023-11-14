import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { AuthTokenErrors } from './errors/AuthTokenError';
import { signOut } from '../contexts/AuthContext';

export function setupAPIClient(ctx = undefined) {
 let cookies = parseCookies(ctx);

 const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
   Authorization: `Bearer ${cookies['@nextauth.token']}`
  }
 })

 api.interceptors.response.use(response => {
  return response;
 }, (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
   //qualquer erro 401 (deslogar o usuario)
   signOut();
   if (typeof window !== undefined) {
    //chamar a função para deslogar usuario
   } else {
    return Promise.reject(new AuthTokenErrors())
   }
  }

  return Promise.reject(error);

 })

 return api;
}