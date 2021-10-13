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
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next//router';
import Router from 'next//router';
import { parseCookies } from 'nookies';

function Valor() {

    function Next() {
        Router.push('/agenda')
    }
    const { pet } = useContext(AuthContext);
    const { 'PStoken': token } = parseCookies();

    const rota = useRouter()
    var storedDados = localStorage.getItem("dados_servico");
    var dados = JSON.parse(storedDados);
 
    var total = parseFloat(dados.banho) + parseFloat(dados.tosa) + parseFloat(dados.tosa_hig) + parseFloat(dados.hidra_pelos) + parseFloat(dados.desembaraca) + parseFloat(dados.escova_dentes) + parseFloat(dados.limpa_ouvido) + parseFloat(dados.corte_unha)
    const formCurrency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })
    total = formCurrency.format(total)
   
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
                    h4.servicos{
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
                                <h3>Valor Final do Serviços</h3>
                            </div>

                            <Row>
                                <Col className="col-md-12">
                                    {/* <h4 className="servicos">Serviços: Banho + Tosa</h4> */}
                                    <h3 className="preco">{total}</h3>
                                </Col>
                            </Row>

                            <br />
                            <Row>
                                <Col className="col-md-3">
                                    <button type="button" className="btn" id="btnBack" style={{ width: "150px !important;" }} onClick={() => rota.back()} >Trocar Serviço</button>
                                </Col>
                                <Col className="col-md-3 offset-3">
                                    <button type="button" className="btn" id="btnNext" onClick={Next} >Próximo</button>
                                </Col>
                            </Row>

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
        props: { }
    };
}