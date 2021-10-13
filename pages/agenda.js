import Menu from '../components/topmenu';
import React, { useContext, useState } from 'react';
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


function Valor() {

  const { pet } = useContext(AuthContext);

  function Next() {
    Router.push('/horarios')
  }

  const [agendamento, setAgendamento] = useState({
    title: "",
    startDate: "",
    endDate: "",
    location: "Room 1"
  });
  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  });
  console.log(agendamento)
  const { 'PStoken': token } = parseCookies();
  const sendAgendamento = async e => {

    setResponse({ formSave: true });

    try {
      const res = await fetch('http://localhost:3030/Servicos/agendamentos', {
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

  };


  const { register, handleSubmit, formState: { errors } } = useForm();


  const onChangeInput = e => setAgendamento({ ...agendamento, [e.target.name]: e.target.value });


  return (
    <div>
      <div className="corFundo">
        <Menu />

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
                    .corFundo{
                        background-color: #83c5d6;
                        position: fixed;
                        min-width: 100%;
                        min-height: 100%;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
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