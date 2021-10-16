import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  FormGroup,
  Input,
  Form,
  Button,
  Row,
  Col,
  Label,
  Alert
} from 'reactstrap';
// import { useForm } from 'react-hook-form';
// import { AuthContext } from '../contexts/AuthContext';
import Router from 'next//router';
import Calendar from 'react-calendar'
import { parseCookies } from 'nookies';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import Menu from '../components/topmenu';
import MenuADM from '../components/topmenuADM'
import { dadosPet } from '../services/funcContextUser'


function Valor() {

  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear();
  var dataAtual = ano + '-' + mes + '-' + dia;

  const { user } = useContext(AuthContext);


    let topmenu;
    if(user.TYPE_USER == 'Admin'){
        topmenu = <MenuADM/>;
    }else{
        topmenu = <Menu />;
    }

  const [agendamento, setAgendamento] = useState({
    title: "",
    startDate: "",
    endDate: "",
    location: "Room 1"
  });

  const [pet, setPet] = useState({
    ID_PET: "",
    ID_USER:  "",
    NOME_PET: "",
    PORTE_PET:  "",
    ENDERECO_PET: "",
    CATEGORIA_PET:  ""
  })

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  });

  var datavalida = agendamento.startDate.split('T')
  var datavalida_2 = agendamento.endDate.split('T')
 
  const { 'PStoken': token } = parseCookies();
  const sendAgendamento = async e => {

    setResponse({ formSave: true });
    if((datavalida[0] < dataAtual) || (datavalida_2[0] > datavalida[0])){
      alert('Data Inválida')
    }else{
      try {
        const res = await fetch(`http://localhost:3030/Servicos/agendamentos/${pet.ID_PET}`, {
          method: 'POST',
          body: JSON.stringify(agendamento),
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
        });
  
        const responseEnv = await res.json();
  
  
        if (responseEnv.error) {
          setResponse({
            formSave: false,
            type: 'error',
            message: responseEnv.mensagem
          });
        } else {
          setResponse({
            formSave: false,
            type: 'success',
            message: responseEnv.mensagem
          });
  
          setTimeout(() => {
            Router.push("/finish")
          }, 1500);
        }
      } catch (err) {
        setResponse({
          formSave: false,
          type: 'error',
          message: "Erro: Falha ao realizar agendamento!"
        });
      }
    }
    
  };

  useEffect(() => {

    const { PStoken } = parseCookies()

    if (PStoken) {
      dadosPet().then(response =>{
        
    setPet({
      ID_PET: response.pet.ID_PET,
      ID_USER: response.pet.ID_USER,
      NOME_PET: response.pet.NOME_PET,
      PORTE_PET: response.pet.PORTE_PET,
      ENDERECO_PET: response.pet.ENDERECO_PET,
      CATEGORIA_PET: response.pet.CATEGORIA_PET  
    })
  })
      
      
    }
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm();


  const onChangeInput = e => setAgendamento({ ...agendamento, [e.target.name]: e.target.value });


  return (
    <div>
      <div>
        {topmenu}

        <Head>
          <title>
            Pet Shower
          </title>
        </Head>

        <style>
          {`.menu-custom{
                        background-color:#000;
                    }
                    .imgLogin{
                        margin-top:100px;
                    }
                    .btn{
                        text-decoration: none;
                        text-transform: uppercase;
                        font-size: 11px;
                        font-weight: bold;
                        margin: 0 15px 0 140px;
                        padding: 10px 15px;
                        overflow: hidden;
                        border: 2px solid #ed8d39;
                        position: relative;
                        z-index: 2; 
                        color: #853e00;
                        
                        
                    }
                    .btn:before{
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    background-color: #faad69;
                    z-index: -1;     
                    transition: 0.7s ease;
                    }
                        
                        
                    }
                    .divMain1{
                        display: inline;    
                        width:50%;
                        float:left;
                    }
                    .divMain2{
                        margin-top:200px;
                        
                    }
                    .alert-hidden {
                        opacity: 0;
                        transition: all 250ms linear 2s;
                    }
                    .top{
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .separator{
                        font-size: 14px;
                        color: #a8a8b3;
                        margin: 32px 0;
                        display: flex;
                        align-items: center;
                    }
                    .separator:before{
                        content: '';
                        flex: 1;
                        height: 1px;
                        background: #a8a8b3;
                        margin-right: 16px;
                        }
                        .separator:after{
                        content: '';
                        flex: 1;
                        height: 1px;
                        background: #a8a8b3;
                        margin-left: 16px;
                        }
                        .bordinha{
                        border-top-style: solid;
                        border-bottom-style: solid;
                        border-left-style: solid;
                        border-right-style: solid;
                        border-color: rgba(237, 141, 57);
                        border-radius: 50px 50px 50px 50px;
                        padding: 15px; 
                        background-color: white;
                    }
                    
                    h3{
                        color: rgba(237, 141, 57);
                    }
                    h4.centro{
                        text-align: center; 
                    }
                    h3.preco{
                        margin-top: 20px;
                        text-align: center; 
                    }
                    `}
        </style>

        <Container className="imgLogin">

          <div className="col-md-8 offset-2 divMain2" >
            <div className="bordinha">
              <div className="top">
                <h3>Seu pet está precisando de um banho?</h3>
                <h3>Agende um horário conosco!</h3>
              </div>
              <Container>
                {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
                {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}
                <Form onSubmit={handleSubmit(sendAgendamento)} noValidate>
                  <Row>
                    <Col className="col-md-10 offset-1">
                      <Label for="title">Nome do Pet:</Label>
                      <Input className="form-control mr-sm-2" type="text" name="title" id="title" placeholder="Nome Pet:" onChange={onChangeInput} />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-md-10 offset-1">
                      <Label for="startDate">De:</Label>
                      <Input className="form-control mr-sm-2" type="datetime-local" name="startDate" id="startDate"{...register("startDate", { required: 'Insira uma data e hora inicial.' })} onChange={onChangeInput} />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-md-10 offset-1">
                      <Label for="endDate">Até:</Label>
                      <Input className="form-control mr-sm-2" type="datetime-local" name="endDate" id="endDate"{...register("endDate", { required: 'Insira uma data e hora final.' })} onChange={onChangeInput} />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col className="col-md-10 offset-1">
                      <Button color="primary" type="submit">Novo Agendamento</Button>{' '}
                    </Col>
                  </Row>
                </Form>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </div>

  );

};
export default Valor;


export async function getServerSideProps(ctx) {

  const { PStoken } = parseCookies(ctx)

  if (!PStoken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  };
}