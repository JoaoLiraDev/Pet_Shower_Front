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
    Alert,
    Table
} from 'reactstrap';
import { parseCookies } from 'nookies';
import Router from 'next//router';



function Cockpit({ data_return }) {

    const dados = data_return.Query_result;

    console.log(dados)

    const dadinho = dados.map((Query_result) =>
    <tr>
        <td key={Query_result.NOME}>{Query_result.NOME}</td>
        <td key={Query_result.NOME_PET}>{Query_result.NOME_PET}</td>
        <td key={Query_result.CPF}>{Query_result.CPF}</td>
        <td key={Query_result.TELEFONE}>{Query_result.TELEFONE}</td>
        <td key={Query_result.DataAgendada}>{Query_result.DataAgendada}</td>
        <td key={Query_result.horario_1}>{Query_result.horario_1} às {Query_result.horario_2}</td>
    </tr>

    );

    return (
        <div>
            <div className="corFundo">
                <MenuADM />

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
                        padding: 25px; 
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
                    .corTabela{
                        background-color: #faad69;
                    }
                    
                    
                    `}
                </style>

                <Container className="imgLogin">
                    <div className="col-md-12 divMain2" >
                        <div className="bordinha">
                            <Row>
                                <Col className="col-md-1">
                                    <FormGroup>
                                        <Label for="nomeDono" >Dono:</Label>
                                    </FormGroup>
                                </Col>
                                <Col className="col-md-2">
                                    <FormGroup>
                                        <Input className="form-control mr-sm-2" type="text" name="nomeDono" id="nomeDono" />
                                    </FormGroup>
                                </Col>
                                <Col className="col-md-1">
                                    <FormGroup>
                                        <Label for="nomePet">Pet:</Label>
                                    </FormGroup>
                                </Col>
                                <Col className="col-md-2">
                                    <FormGroup>
                                        <Input className="form-control mr-sm-2" type="text" name="nomePet" id="nomePet" />
                                    </FormGroup>
                                </Col>
                                <Col className="col-md-1">
                                    <FormGroup>
                                        <Label for="cpf">CPF:</Label>
                                    </FormGroup>
                                </Col>
                                <Col className="col-md-2">
                                    <FormGroup>
                                        <Input className="form-control mr-sm-2" type="text" name="cpf" id="cpf" />
                                    </FormGroup>
                                </Col>
                                <Col className="col-md-1">
                                    <FormGroup>
                                        <Label for="data">Data:</Label>
                                    </FormGroup>
                                </Col>
                                <Col className="col-md-2">
                                    <FormGroup>
                                        <Input className="form-control mr-sm-2" type="text" name="data" id="data" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col className="col-md-4 offset-8">
                                    <button type="button" className="btn" id="btnNext" >Buscar</button>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col className="col-md-12">
                                    <Table bordered>
                                        <thead className="corTabela">
                                            <tr>
                                                <th>Dono</th>
                                                <th>Pet</th>
                                                <th>CPF</th>
                                                <th>Telefone</th>
                                                <th>Data</th>
                                                <th>Horário</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dadinho}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>

            </div>
        </div>

    );

};
export default Cockpit;

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


    const res = await fetch('http://localhost:3030/Servicos/dadosCockpit', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${PStoken}` }
    });
    const data_return = await res.json();


    return {
        props: { data_return }
    };
}