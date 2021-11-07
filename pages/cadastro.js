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
import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/AuthContext';
import Router from 'next//router';



function cadastrar() {


    return (
        <div>
            <Head>
                <title>
                    Pet Shower
                </title>
            </Head>

            <style>
                {`.menu-custom{
                        background-color:#ffff;
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
                        padding: 25px 25px 25px 25px; 
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
                    
                    
                    `}
            </style>


            <Navbar className="menu-custom" expand="md" fixed="top">
                <Container className="top">

                    <Image
                        src="/logo.png"
                        alt="Picture of the author"
                        width={200}
                        height={105}
                    />

                </Container>
            </Navbar>
            <div className="imgLogin corFundo">
                <div className="col-md-8 offset-2 divMain2" >
                    <div className="bordinha">
                        <Form className="form">
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="autor">Primeiro Nome:</Label>
                                        <Input type="text" name="firstName" id="firstName" placeholder="Primeiro Nome:" />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="autor">Sobrenome Nome:</Label>
                                        <Input type="text" name="SobreNome" id="SobreNome" placeholder="Sobrenome:" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="autor">E-mail:</Label>
                                <Input type="email" name="email" id="email" placeholder="Email:" />
                            </FormGroup>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="autor">Data de Nascimento:</Label>
                                        <Input type="date" name="dt_nasc" id="dt_nasc" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="autor">Senha:</Label>
                                        <Input type="password" name="senha" id="senha" placeholder="Senha:" placeholder="Password:" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-md-1"></Col>
                                <Col className="col-md-1"></Col>
                                <Col className="col-md-6 offset-1">
                                    <button type="submit" className="btn btnAnimado" id="btnCadastrar" >Cadastrar-se</button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div >
    );

};
export default cadastrar;