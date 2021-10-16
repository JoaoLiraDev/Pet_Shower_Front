import MenuADM from '../components/topmenuADM';
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
import { parseCookies } from 'nookies';
import Paper from '@material-ui/core/Paper';
import Router from 'next//router';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui';



function Valor(obj) {
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear();
  var dataAtual = ano + '-' + mes + '-' + dia;
  

  const dados_bd = obj.obj
  const [state, setDate] = useState({
    data: dados_bd,
    currentDate: dataAtual,
  });
  const currentDateChange = (currentDate) => { setDate({ data: dados_bd, currentDate: currentDate }); };
  
  return (
    <div>
      <Head>
        <title>
          Pet Shower
        </title>
      </Head>

      <MenuADM />
      <div>

        <style>
          {`
          .menu-custom{
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
          
          .bordinha{
              border-top-style: solid;
              border-bottom-style: solid;
              border-left-style: solid;
              border-right-style: solid;
              border-color: rgba(237, 141, 57);
              border-radius: 50px 50px 50px 50px;
              padding: 45px; 
              background-color: white;
          }
          .corFundo{
              background-color: #83c5d6;
      
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
          .containerFlex{
            display: flex;
            margin-top: 50px;
            
          }
          .AppointmentsContainer-container-184{
            z-index: 1000;
          }
          `}
        </style>
        <br />
        <br />
        <br />
        <Container className="imgLogin bordinha">
            <Paper>
              <Scheduler data={state.data} height={1160} locale={"PT-br"}>
                <ViewState currentDate={state.currentDate} onCurrentDateChange={currentDateChange} />
                <WeekView startDayHour={8.50} endDayHour={19.50}/>
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
                <AppointmentTooltip showCloseButton/>
              </Scheduler>
            </Paper>
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

  const res = await fetch('http://localhost:3030/Servicos/all', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${PStoken}` }
  });
  var data_return = await res.json();


  const obj = data_return.Query_result

  return {
    props: { obj }
  };
}