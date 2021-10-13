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
import { parseCookies } from 'nookies';
import Router from 'next//router';
import { AuthContext } from '../contexts/AuthContext';



function meuAgendamento({data_return}) {
    const dados = data_return.Query_result;

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
                <h4>Caso precise, entre em contato conosco: tel 41870817</h4>

            <br />
        </div>
    );

    console.log(dados)

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
                    #btnNext{
                        width: 100px;
                        float: right !important;
                        
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
                        padding: 30px; 
                        background-color: white;
                        margin-bottom: 10px;
                    }
                    .corFundo{
                        background-color: #83c5d6;
                        min-width: 100%;
                        min-height: 100%;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                    h3{
                        color: rgba(237, 141, 57);
                    }
                    h4{
                        text-align: center;
                    }
                    
                    
                    `}
                </style>

                <Container className="imgLogin">
                    <div className="col-md-8 offset-2 divMain2" >
                        {dadinho}
                        <Col className="col-md-12">
                            <Row>
                                <div className="col-md-3">
                                    <button type="submit" className="btn">Adicionar outro agendamento</button>
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" className="btn">Cancelar agendamento</button>
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" className="btn">Remarcar</button>
                                </div>
                            </Row>
                        </Col>
                        <br/>
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