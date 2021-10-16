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
import { parseCookies, setCookie } from 'nookies';
import Router from 'next//router';
import { AuthContext } from '../contexts/AuthContext';
import CardAgenda from '../components/cardAgendamento';
import Menu from '../components/topmenu';
import MenuADM from '../components/topmenuADM';


function meuAgendamento({data_return}) { 
    const { user } = useContext(AuthContext);
    let topmenu;
    if(user.TYPE_USER == 'Admin'){
        topmenu = <MenuADM/>;
    }else{
        topmenu = <Menu />;
    }
    const dados = data_return.Query_result;

    function remarcar(id_pet, nome_pet){
        const pet = {
            "NOME_PET": `${nome_pet}`,
            "id_pet": `${id_pet}`
        }
        setCookie(null, 'id_pet_reagendar', JSON.stringify(pet), {
            maxAge: 60 * 60 * 24,
            path: '/'
          });
          Router.push('/reagendar')
    }

    const { 'PStoken': token } = parseCookies();

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });


    const apagarAgendamento = async (id_agendamento) => {
     

        try {
            const res = await fetch(`http://localhost:3030/Servicos/delete_agendamento/${id_agendamento}`, {
                method: 'DELETE',
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


            }
        } catch (err) {
            setResponse({
                formSave: false,
                type: 'error',
                message: "Erro: Falha ao deletar Agendamento!"
            });
        }

        setTimeout(() => {
            Router.reload()
        }, 2500);
    };

    const dadinho = dados.map((Query_result) =>
        <div className="bordinha">
            <div className="top">
                <h3>Você tem um horário marcado!</h3>
            </div>
            <Col className="col-md-12">
                <Row>
                    <div className="col-md-6">
                        <h4 key={Query_result.NOME_PET}>Pet: {Query_result.NOME_PET}</h4>
                    </div>
                    <div className="col-md-6">
                        <h4 key={Query_result.NOME}>Dono : {Query_result.NOME}</h4>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-6">
                        <h4 key={Query_result.DataAgendada}>Pet: {Query_result.DataAgendada}</h4>
                    </div>
                    <div className="col-md-6">
                        <h4 key={Query_result.horario_1}>Horário: {Query_result.horario_1} às {Query_result.horario_2}</h4>
                    </div>
                </Row>
            </Col>
                <h4>Caso precise, entre em contato conosco: (11) 4187-0817</h4>
            <Col className="col-md-12">
                <Row>
                    {/* <div className="col-md-3">
                        <button type="submit" className="btn" onClick={() => Router.push('/home')}>Novo Agendamento</button>
                    </div>
                   */}
                    <div className="col-md-3">
                        <button type="submit" onClick={()=> apagarAgendamento(Query_result.id_pet)} className="btn">Cancelar</button>
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn" onClick={() => remarcar(Query_result.id_pet, Query_result.NOME_PET)}>Remarcar</button>
                    </div>
                </Row>
            </Col>

        </div>
       
    );
    var card;
    if (dados == ''){
        card = <CardAgenda />
    }else{
        card = dadinho
    }
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
                        margin: 20px 15px -20px 100px;
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
                    #btnNext{
                        width: 100px;
                        
                    }
                    .divMain1{
                        display: inline;    
                        width:50%;
                        float:left;
                    }
                    .divMain2{
                        margin-top:150px;
                        
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
                            padding: 50px 50px 50px 50px; 
                            background-color: white;
                            margin-top: 20px;
                            width: 500px;
                    }
                    
                    h3{
                        color: rgba(237, 141, 57);
                        text-align: center;
                    }
                    h4{
                        text-align: center;
                    }
                    
                    
                    `}
                </style>

                <Container >
                    <div className="divMain2">
                    {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
                    {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}

                    <Row>
                    <div className="col-md-8 offset-3" >
                        {card}
                        {/* {dadinho}
                        <CardAgenda /> */}
                        <br/>
                    </div>
                    </Row>
                    </div>
                </Container>

            </div>
        </div>

    );

};
export default meuAgendamento;


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


    const res = await fetch('http://localhost:3030/Servicos/agendamentoUser', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${PStoken}` }
    });
    const data_return = await res.json();


    return {
        props: { data_return }
    };
}