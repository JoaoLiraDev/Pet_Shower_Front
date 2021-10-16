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
import Menu from '../components/topmenu';
import MenuADM from '../components/topmenuADM';


function Horarios() {
    const { user } = useContext(AuthContext);
    let topmenu;
    if(user.TYPE_USER == 'Admin'){
        topmenu = <MenuADM/>;
    }else{
        topmenu = <Menu />;
    }
    function Next() {
        Router.push('/finish')
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
                    
                    
                    `}
                </style>

                <Container className="imgLogin">

                    <div className="col-md-8 offset-2 divMain2" >
                        <div className="bordinha">
                            <div className="top">
                                <h3>Dia: 1 de Julho</h3>
                            </div>

                            <Row>
                                <Col className="col-md-6 offset-3">
                                    <FormGroup>
                                        <Label>Horários disponíveis :</Label>
                                    </FormGroup>
                                </Col>
                                <Col className="col-md-6 offset-4">
                                    <FormGroup>
                                        <Input type="checkbox" />{' '} 9h às 10h
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="checkbox" />{' '} 10h às 11h
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="checkbox" />{' '} 11h às 12h
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="checkbox" />{' '} 12h às 13h
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="checkbox" />{' '} 13h às 14h
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="checkbox" />{' '} 14h às 15h
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="checkbox" />{' '} 15h às 16h
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="checkbox" />{' '} 16h às 17h
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="checkbox" />{' '} 17h às 18h
                                    </FormGroup>
                                </Col>
                            </Row>

                            <br />
                            <Col className="col-md-4 offset-6">
                                <button type="button" className="btn" id="btnNext" onClick={Next} >Próximo</button>
                            </Col>
                        </div>



                    </div>


                </Container>

            </div>
        </div>

    );

};
export default Horarios;