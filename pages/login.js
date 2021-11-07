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



function Login() {

    const [login, setLogin] = useState({
        email: "",
        senha: ""
    });
    console.log(login)
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onChangeInput = e => setLogin({ ...login, [e.target.name]: e.target.value });

    const { user, singIn } = useContext(AuthContext)
    async function sendLogin(login) {
        await singIn(login)
        console.log(user)
    }

    function Cadastrar() {
        Router.push('/novoCadastro')
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
                    width: 120px;   
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
                    float:right;
                    margin-top:100px;
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

                <div className="divMain2" >
                    <div className="bordinha">
                    <div className="top">
                        <Image src="/logo.png" alt="Picture of the author" width={200} height={105} />
                    </div>

                    <Form onSubmit={handleSubmit(sendLogin)} noValidate>
                        <Row>
                            <Col className="col-md-10 offset-1">
                                <Label for="email">Email:</Label>
                                <Input className="form-control mr-sm-2" type="text" name="email" id="email"{...register("email", { required: 'Insira um e-mail.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Insira um e-mail válido', } })} placeholder="Email:" onChange={onChangeInput} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-10 offset-1">
                                <Label for="senha">Password:</Label>
                                <Input className="form-control mr-sm-2" type="password" name="senha" id="senha" {...register("senha", { required: 'Insira uma senha' })} placeholder="Password:" onChange={onChangeInput} />
                            </Col>
                        </Row>
                        <br />
                        <button type="submit" className="btn btnAnimado" id="btnLogin" >Login</button>
                        <div className="separator">ou faça seu cadastro agora.</div>
                    </Form>
                    <button type="submit" className="btn" id="btnCadastrar" onClick={Cadastrar}>Cadastrar-se</button>
                    </div>
                </div>
            </Container>
        </div>
    </div>
</div>  
    );

};
export default Login;
