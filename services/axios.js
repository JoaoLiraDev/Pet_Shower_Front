import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient(ctx){
    const { 'MQtoken': token } = parseCookies(ctx)

   const api = axios.create({
       baseURL: 'http://localhost:3030/'
   });
   
   api.interceptors.request.use(async config => {
       console.log(config)
       
       return config;
   });
   
   if(token){
       api.defaults.headers['Authorization'] = `Bearer ${token}`;
   };

   return api;
};
