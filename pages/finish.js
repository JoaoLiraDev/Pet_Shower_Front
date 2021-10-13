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



function Finish(obj) {
    const dados = obj.obj[0]

    var storedDados = localStorage.getItem("dados_servico");
    const { pet } = useContext(AuthContext);
    const { 'PStoken': token } = parseCookies();

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const sendServico = async e => {

        setResponse({ formSave: true });

        try {
            const res = await fetch(`http://localhost:3030/Servicos/cadastroServico/${pet.ID_USER}/${pet.ID_PET}`, {
                method: 'POST',
                body: storedDados,
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
                    Router.push('/')
                }, 1500);

            }
        } catch (err) {
            setResponse({
                formSave: false,
                type: 'error',
                message: "Erro: Falha ao cadastrar serviço!"
            });
        }

    };


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
                        {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
                        {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}
                        <div className="bordinha">
                            <div className="top">
                                <h3>Seu horário foi agendado com sucesso!</h3>
                            </div>

                            <div>
                                <h4>Compareça ao Pet Shower (Rua Pet, Avenida Shower nº540) no
                                    dia {dados.startDate}, você pode esperar seu Pet ou
                                    pode voltar {dados.endDate} para buscá-lo. </h4>
                            </div>
                            <div>
                                <h4>Obrigado pela preferência.</h4>
                            </div>
                            <div>
                                <h4>Estamos ansiosos para recebê-los!</h4>
                            </div>
                            <div>
                                <h4>(O pagamento é realizado no estabelecimento)</h4>
                            </div>

                            <br />
                            <Row>
                                <Col className="col-md-3">
                                    <button type="button" className="btn" style={{ width: "200px;" }} id="btnCancel">Cancelar Agendamento</button>
                                </Col>
                                <Col className="col-md-3 offset-3">
                                    <button type="button" className="btn" id="btnNext" onClick={sendServico} >Concluir</button>
                                </Col>
                            </Row>
                        </div>



                    </div>


                </Container>

            </div>
        </div>

    );

};
export default Finish;


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


    const res = await fetch('http://localhost:3030/Servicos/allFormatado', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${PStoken}` }
    });
    var data_return = await res.json();


    const obj = data_return.Query_result

    return {
        props: { obj }
    };
}