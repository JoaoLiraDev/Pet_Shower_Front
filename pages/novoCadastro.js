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
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import Router from 'next//router';
import InputMask from 'react-input-mask';


function Cadastrar() {

    const [cadastro, setCadastro] = useState({
        nome: "",
        sobrenome: "",
        telefone: "",
        email: "",
        cpf: "",
        endereco: "",
        numero: "",
        complemento: "",
        senha: "",
        type_user: "-"
    });

    console.log(cadastro)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const onChangeInput = e => setCadastro({ ...cadastro, [e.target.name]: e.target.value });

    const cadastraUser = async e => {


        setResponse({ formSave: true });

        try {
            const res = await fetch('http://localhost:3030/Usuarios/cadastroUsuario', {
                method: 'POST',
                body: JSON.stringify(cadastro),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseEnv = await res.json();
            console.log(responseEnv)

            if (responseEnv.mensagem == "Usuário já cadastrado" || responseEnv.err) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: responseEnv.mensagem,
                });

            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: responseEnv.mensagem,
                });

                setTimeout(() => {
                    Router.push('/login')
                }, 2000);

            }
        } catch (err) {
            setResponse({
                formSave: false,
                type: 'error',
                message: "Erro: Falha ao realizar login!",
            });
        }
    }

    return (
        <div>
             <Head>
                <title>
                    Pet Shower
                </title>
            </Head>
            
            <div className="full" style={{ backgroundImage: "url('/back.png')" }}>
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
                #btnLogin{
                    width: 100px;
                    
                }
                #btnCadastrar{
                    width: 120px;
                }
                .divMain1{
                    display: inline;    
                    width:50%;
                    float:left;
                }
                .divMain2{
                    display: inline;
                    width:50%;
                    margin-top:150px;
                    padding-left: 145px;
                    
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
                    .bordinha{
                      border-top-style: solid;
                      border-bottom-style: solid;
                      border-left-style: solid;
                      border-right-style: solid;
                      border-color: rgba(237, 141, 57);
                      border-radius: 50px 50px 50px 50px;
                      padding: 35px; 
                      background-color: white;
                      margin-top:100px;
                  }
                  .full{
                    position: fixed;
                    min-width: 100%;
                    min-height: 100%;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                  }
                  
                
                `}
        </style>

    <div className="divImage">
            <Container>
                {errors.email && <Alert color="danger">{errors.email.message}</Alert>}
                {errors.senha && <Alert color="danger">{errors.senha.message}</Alert>}
                  
                
                        

                    <Form onSubmit={handleSubmit(cadastraUser)} noValidate>
                        <div className="col-md-8  divMain2" >
                            <div className="bordinha">
                            
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="nome">Primeiro Nome:</Label>
                                                <Input type="text" name="nome" id="nome" placeholder="Primeiro Nome:" {...register("nome")} onChange={onChangeInput} />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="sobrenome">Sobrenome Nome:</Label>
                                                <Input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome:" {...register("sobrenome")} onChange={onChangeInput} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        
                                        <Col>
                                            <FormGroup>
                                                <Label for="telefone">Telefone para contato:</Label>
                                                <InputMask mask="(99)99999-9999"  className="form-control" name="telefone" id="telefone" placeholder="Celular:" {...register("telefone")} onChange={onChangeInput}  />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="cpf">CPF:</Label>
                                                <InputMask mask="999.999.999-99" className="form-control"  name="cpf" id="cpf" placeholder="CPF:" {...register("cpf", { required: 'Insira o nome do responsável' })} onChange={onChangeInput}  />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="endereco">Endereço:</Label>
                                                <Input type="text" name="endereco" id="endereco" placeholder="Endereço:" {...register("endereco")} onChange={onChangeInput} />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="complemento">Complemento:</Label>
                                                <Input type="text" name="complemento" id="complemento" placeholder="Complemento:" {...register("complemento")} onChange={onChangeInput} />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="numero">Número:</Label>
                                                <Input type="text" name="numero" id="numero" placeholder="Número:" {...register("numero")} onChange={onChangeInput} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="email">E-mail:</Label>
                                                <Input type="email" name="email" id="email" placeholder="Email:" {...register("email")} onChange={onChangeInput} />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="autor">Senha:</Label>
                                                <Input type="password" name="senha" id="senha" placeholder="Senha:" placeholder="Password:" {...register("senha")} onChange={onChangeInput} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        
                                        <Col className="col-md-6 offset-3">
                                            <button type="submit" className="btn btnAnimado" id="btnCadastrar" >Cadastrar-se</button>
                                        </Col>
                                    </Row>
                            </div>
                        </div>
                    </Form>
            </Container>
        </div>
    </div>
</div>
  
    );

};
export default Cadastrar;
