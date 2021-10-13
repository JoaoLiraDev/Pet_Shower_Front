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
import Router from 'next//router';
import { parseCookies } from 'nookies';


function Servicos() {
    const { pet } = useContext(AuthContext);

    const [serv, setServ] = useState({
        banho : 0,
        tosa : 0,
        tosa_hig : 0,
        hidra_pelos : 0,
        desembaraca : 0,
        escova_dentes : 0,
        limpa_ouvido : 0,
        corte_unha : 0
    });

    console.log(serv);
    
    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const { 'PStoken': token } = parseCookies();
    function Next(){
        setResponse({
            formSave: false,
            type: 'success',
            message: 'Serviço registrado com sucesso'
        });
        setTimeout(() => {
            localStorage.setItem("dados_servico",JSON.stringify(serv));
            Router.push('/valor')
        }, 1300);
    
    }
    

    const onChangeInput = e => setServ({ ...serv, [e.target.name]: e.target.value}) ;


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
                        {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
                        {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}
                        <div className="bordinha">
                            <div className="top">
                                <h3>Escolha o(os) serviço(s) que deseja para o Pet:</h3>
                            </div>

                            <Row>
                                <Col className="col-md-6 offset-3">
                                    <FormGroup>
                                        <Label>Serviços:</Label>
                                    </FormGroup>
                                </Col>
                                <Col className="col-md-6 offset-3">
                                    <FormGroup>

                                        <Input type="select" name="banho" id="banho" onChange={onChangeInput}>
                                            <option value="0">Banho</option>
                                            <option value="20.00">Porte pequeno - R$ 20,00</option>
                                            <option value="25.00">Porte médio - R$ 25,00</option>
                                            <option value="30.00">Porte grande - R$ 30,00</option>
                                        </Input>
                                        {/* <Input type="checkbox" name="banho" id="banho" value="50,00" onChange={onChangeInput} />{' '} Banho */}
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select" name="tosa" id="tosa" onChange={onChangeInput}>
                                            <option value="0">Tosa</option>
                                            <option value="10.00">Porte pequeno - R$ 10,00</option>
                                            <option value="10.00">Porte médio - R$ 10,00</option>
                                            <option value="15.00">Porte grande - R$ 15,00</option>
                                        </Input>
                                        {/* <Input type="checkbox" name="tosa" id="tosa" onChange={()=> setServ} />{' '} Tosa */}
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select" name="tosa_hig" id="tosa_hig" onChange={onChangeInput}>
                                            <option value="0">Tosa higienica</option>
                                            <option value="10.00">Porte pequeno - R$ 10,00</option>
                                            <option value="10.00">Porte médio - R$ 10,00</option>
                                            <option value="10.00">Porte grande - R$ 10,00</option>
                                        </Input>
                                        {/* <Input type="checkbox" name="tosa_hig" id="tosa_hig" onChange={onChangeInput} />{' '} Tosa higienica */}
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select" name="hidra_pelos" id="hidra_pelos" onChange={onChangeInput}>
                                            <option value="0">Hidratação dos pelos</option>
                                            <option value="15.00">Porte pequeno - R$ 15,00</option>
                                            <option value="15.00">Porte médio - R$ 15,00</option>
                                            <option value="15.00">Porte grande - R$ 15,00</option>
                                        </Input>
                                        {/* <Input type="checkbox" name="hidra_pelos" id="hidra_pelos" onChange={onChangeInput} />{' '} Hidratação dos pelos */}
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select" name="desembaraca" id="desembaraca" onChange={onChangeInput}>
                                            <option value="0">Desembaraçamento</option>
                                            <option value="15.00">Porte pequeno - R$ 15,00</option>
                                            <option value="15.00">Porte médio - R$ 15,00</option>
                                            <option value="15.00">Porte grande - R$ 15,00</option>
                                        </Input>
                                        {/* <Input type="checkbox" name="desembaraca" id="desembaraca" onChange={onChangeInput} />{' '} Desembaraçamento */}
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select" name="escova_dentes" id="escova_dentes" onChange={onChangeInput}>
                                            <option value="0">Escovação de dentes</option>
                                            <option value="10.00">Porte pequeno - R$ 10,00</option>
                                            <option value="10.00">Porte médio - R$ 10,00</option>
                                            <option value="10.00">Porte grande - R$ 10,00</option>
                                        </Input>
                                        {/* <Input type="checkbox" name="escova_dentes" id="escova_dentes" onChange={onChangeInput} />{' '} Escovação de dentes */}
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select" name="limpa_ouvido" id="limpa_ouvido" onChange={onChangeInput}>
                                            <option value="0">Limpeza de ouvido</option>
                                            <option value="5.00">Porte pequeno- R$ 5,00</option>
                                            <option value="5.00">Porte médio- R$ 5,00</option>
                                            <option value="5.00">Porte grande- R$ 5,00</option>
                                        </Input>
                                        {/* <Input type="checkbox" name="limpa_ouvido" id="limpa_ouvido" onChange={onChangeInput} />{' '} Limpezas de ouvido */}
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select" name="corte_unha" id="corte_unha" onChange={onChangeInput}>
                                            <option value="0">Cortes de unhas</option>
                                            <option value="5.00">Porte pequeno - R$ 5,00</option>
                                            <option value="5.00">Porte médio - R$ 5,00</option>
                                            <option value="5.00">Porte grande - R$ 5,00</option>
                                        </Input>
                                        {/* <Input type="checkbox" name="corte_unha" id="corte_unha" onChange={onChangeInput} />{' '} Cortes de unhas */}
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
export default Servicos;


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