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
// import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import Router from 'next//router';
import Menu from '../components/topmenu';
import MenuADM from '../components/topmenuADM';

function Home() {
    const { user } = useContext(AuthContext);
    let topmenu;
    if(user.TYPE_USER == 'Admin'){
        topmenu = <MenuADM/>;
    }else{
        topmenu = <Menu />;
    }
    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const { 'PStoken': token } = parseCookies();
    const cadastraPet = async e => {
        if (pet.nome_pet != '' && pet.porte_pet != '' && pet.endereco_pet != '' && pet.categoria_pet != '') {

            setResponse({ formSave: true });

            try {
                const res = await fetch('http://localhost:3030/Pet/cadastroPet', {
                    method: 'POST',
                    body: JSON.stringify(pet),
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
                        Router.push('/servicos')
                    }, 2000);
                }
            } catch (err) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: "Erro: Falha ao cadastrar Pet!"
                });
            }

        } else {
            alert("Por Favor preencha todos os campos.")
        }
        // Router.push('/servicos')
    }

    const [pet, setPet] = useState({
        nome_pet: '',
        porte_pet: '',
        endereco_pet: '',
        categoria_pet: ''
    });

    const onChangeInput = e => setPet({ ...pet, [e.target.name]: e.target.value });


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
                        margin-bottom:25px;
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
                        margin-bottom: 25px;
                        
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
                    
                    h3{
                        color: rgba(237, 141, 57);
                    }
                    
                    
                    `}
                </style>

                <Container className="imgLogin">
                    <div className="col-md-6 offset-3 divMain2" >
                        {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
                        {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}
                        <div className="bordinha">
                            <div className="top">
                                <h3>Meu Pet</h3>
                            </div>

                            <Row>
                                <Col className="col-md-12">
                                    <FormGroup>
                                        <Label for="nome_pet">Nome do Pet:</Label>
                                        <Input className="form-control mr-sm-2" type="text" name="nome_pet" id="nome_pet" placeholder="Nome do Pet" onChange={onChangeInput} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-md-12">
                                    <FormGroup>
                                        <Label for="porte_pet">Porte:</Label>
                                        <Input type="select" name="porte_pet" id="porte_pet" onChange={onChangeInput}>
                                            <option>Selecione um Porte</option>
                                            <option>Pequeno</option>
                                            <option>Médio</option>
                                            <option>Grande</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-md-12">
                                    <FormGroup>
                                        <Label for="endereco_pet">Endereço:</Label>
                                        <Input className="form-control mr-sm-2" type="text" name="endereco_pet" id="endereco_pet" placeholder="Endereço" onChange={onChangeInput} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-md-12">
                                    <FormGroup>
                                        <Label for="categoria_pet">Categoria:</Label>
                                        <Input type="select" name="categoria_pet" id="categoria_pet" onChange={onChangeInput}>
                                            <option>Selecione uma Categoria</option>
                                            <option>Cachorro</option>
                                            <option>Gato</option>
                                            <option>Coelho</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <br />
                            <Col className="col-md-4 offset-6">
                                <button type="button" className="btn" id="btnNext" onClick={cadastraPet} >Próximo</button>
                            </Col>
                        </div>


                    </div>


                </Container>

            </div>
        </div>

    );

};
export default Home;


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
    }
}