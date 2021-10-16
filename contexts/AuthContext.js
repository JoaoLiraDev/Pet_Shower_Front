import { createContext, useState, useEffect } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next//router';
import { api } from '../services/api';
import { dadosUser, dadosPet } from '../services/funcContextUser'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {

  
  // dadosPet().then(response =>{
        
  //   setPet({
  //     ID_PET: response.pet.ID_PET,
  //     ID_USER: response.pet.ID_USER,
  //     NOME_PET: response.pet.NOME_PET,
  //     PORTE_PET: response.pet.PORTE_PET,
  //     ENDERECO_PET: response.pet.ENDERECO_PET,
  //     CATEGORIA_PET: response.pet.CATEGORIA_PET  
  //   })
  // })

  const [user, setUser] = useState({
    ID_USER: "",
    NOME: "",
    SOBRENOME: "",
    TELEFONE: "",
    EMAIL: "",
    CPF: "",
    ENDERECO: "",
    NUMERO: "",
    COMPLEMENTO: "",
    TYPE_USER: ""
  });

  const [pet, setPet] = useState({
    ID_PET: "",
    ID_USER:  "",
    NOME_PET: "",
    PORTE_PET:  "",
    ENDERECO_PET: "",
    CATEGORIA_PET:  ""
  })

  const isAuthenticated = !!user

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: '',
    token: ''
  });

  useEffect(() => {

    const { PStoken } = parseCookies()

    if (PStoken) {
      dadosUser().then(response => {
        setUser({
          ID_USER: response.user.ID_USER,
          NOME: response.user.NOME,
          SOBRENOME: response.user.SOBRENOME,
          TELEFONE: response.user.TELEFONE,
          EMAIL: response.user.EMAIL,
          CPF: response.user.CPF,
          ENDERECO: response.user.ENDERECO,
          NUMERO: response.user.NUMERO,
          COMPLEMENTO: response.user.COMPLEMENTO,
          TYPE_USER: response.user.TYPE_USER
        });
      })
      
      
    }
  }, [])

  async function singIn(login) {

    try {
      const res = await fetch('http://localhost:3030/Usuarios/login', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: { 'Content-Type': 'application/json' }
      });

      const responseEnv = await res.json();

      if (responseEnv.mensagem == "Falha na autenticação") {
        setResponse({
          formSave: false,
          type: 'error',
          message: responseEnv.mensagem,
          token: '-',
        });
        alert(responseEnv.mensagem)
        Router.reload()
      } else {

        setResponse({
          formSave: false,
          type: 'success',
          message: responseEnv.mensagem,
          token: responseEnv.token
        });

        setCookie(undefined, 'PStoken', responseEnv.token, {
          maxAge: 60 * 60 * 5 //5_horas,
        });

        setUser({
          id_user: responseEnv.user.id_user,
          username: responseEnv.user.username,
          first_name: responseEnv.user.first_name,
          last_name: responseEnv.user.last_name,
          email: responseEnv.user.email,
        });


        api.defaults.headers['Authorization'] = `Bearer ${responseEnv.token}`;

        Router.push('/')
      }
    } catch (err) {
      setResponse({
        formSave: false,
        type: 'error',
        message: "Erro: Falha ao realizar login!",
        token: '-'
      });
    }

  }

  return (
    <AuthContext.Provider value={{ pet, user, isAuthenticated, singIn }}>
      {children}
    </AuthContext.Provider>
  )
}