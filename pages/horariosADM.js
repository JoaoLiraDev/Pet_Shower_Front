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
// import { useForm } from 'react-hook-form';
// import { AuthContext } from '../contexts/AuthContext';
import Router from 'next//router';



function Cockpit() {

    return (
        <div>
            <div>
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
                    .corTabela1{
                        background-color: #faad69;
                    }
                    .corTabela2{
                        background-color: #ffff;
                    }
                    
                    
                    `}
                </style>

                <Container className="imgLogin">

                    <div className="col-md-12 divMain2" >
                        
                            <Row>
                                <Col className="col-md-12">
                                    <Table bordered>
                                        <thead className="corTabela1">
                                            <tr>
                                                <th>Dono</th>
                                                <th>Pet</th>
                                                <th>CPF</th>
                                                <th>Telefone</th>
                                                <th>Data</th>
                                                <th>Horário</th>
                                            </tr>
                                        </thead>
                                        <tbody className="corTabela2">
                                            <tr>
                                                <td>Fulano</td>
                                                <td>Totó</td>
                                                <td>1233432551</td>
                                                <td>123456789</td>
                                                <td>31/31/31</td>
                                                <td>16h às 17h</td>
                                            </tr>
                                            <tr>
                                                <td>Fulano</td>
                                                <td>Totó</td>
                                                <td>1233432551</td>
                                                <td>123456789</td>
                                                <td>31/31/31</td>
                                                <td>16h às 17h</td>
                                            </tr>
                                            <tr>
                                                <td>Fulano</td>
                                                <td>Totó</td>
                                                <td>1233432551</td>
                                                <td>123456789</td>
                                                <td>31/31/31</td>
                                                <td>16h às 17h</td>
                                            </tr>
                                            <tr>
                                                <td>Fulano</td>
                                                <td>Totó</td>
                                                <td>1233432551</td>
                                                <td>123456789</td>
                                                <td>31/31/31</td>
                                                <td>16h às 17h</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>

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
  
    return {
      props: {}
    };
  }