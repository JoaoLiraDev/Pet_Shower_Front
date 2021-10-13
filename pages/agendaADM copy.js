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
  Alert
} from 'reactstrap';
// import { useForm } from 'react-hook-form';
// import { AuthContext } from '../contexts/AuthContext';
import Router from 'next//router';
import Calendar from 'react-calendar'



function Valor() {

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
                    h4.centro{
                        text-align: center; 
                    }
                    h3.preco{
                        margin-top: 20px;
                        text-align: center; 
                    }
                    .react-calendar {
                        width: 545px;
                        max-width: 200%;
                        background: white;
                        border: 1px solid #a0a096;
                        font-family: Arial, Helvetica, sans-serif;
                        line-height: 1.125em;
                      }
                      .react-calendar--doubleView {
                        width: 700px;
                      }
                      .react-calendar--doubleView .react-calendar__viewContainer {
                        display: flex;
                        margin: -0.5em;
                      }
                      .react-calendar--doubleView .react-calendar__viewContainer > * {
                        width: 50%;
                        margin: 0.5em;
                      }
                      .react-calendar,
                      .react-calendar *,
                      .react-calendar *:before,
                      .react-calendar *:after {
                        -moz-box-sizing: border-box;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                      }
                      .react-calendar button {
                        margin: 0;
                        border: 0;
                        outline: none;
                      }
                      .react-calendar button:enabled:hover {
                        cursor: pointer;
                      }
                      .react-calendar__navigation {
                        height: 44px;
                        margin-bottom: 1em;
                      }
                      .react-calendar__navigation button {
                        min-width: 44px;
                        background: none;
                      }
                      .react-calendar__navigation button:enabled:hover,
                      .react-calendar__navigation button:enabled:focus {
                        background-color: #e6e6e6;
                      }
                      .react-calendar__navigation button[disabled] {
                        background-color: #f0f0f0;
                      }
                      .react-calendar__month-view__weekdays {
                        text-align: center;
                        text-transform: uppercase;
                        font-weight: bold;
                        font-size: 0.75em;
                      }
                      .react-calendar__month-view__weekdays__weekday {
                        padding: 0.5em;
                      }
                      .react-calendar__month-view__weekNumbers {
                        font-weight: bold;
                      }
                      .react-calendar__month-view__weekNumbers .react-calendar__tile {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 0.75em;
                        padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
                      }
                      .react-calendar__month-view__days__day--weekend {
                        color: #d10000;
                      }
                      .react-calendar__month-view__days__day--neighboringMonth {
                        color: #757575;
                      }
                      .react-calendar__year-view .react-calendar__tile,
                      .react-calendar__decade-view .react-calendar__tile,
                      .react-calendar__century-view .react-calendar__tile {
                        padding: 2em 0.5em;
                      }
                      .react-calendar__tile {
                        max-width: 100%;
                        text-align: center;
                        padding: 0.75em 0.5em;
                        background: none;
                      }
                      .react-calendar__tile:disabled {
                        background-color: #f0f0f0;
                      }
                      .react-calendar__tile:enabled:hover,
                      .react-calendar__tile:enabled:focus {
                        background-color: #e6e6e6;
                      }
                      .react-calendar__tile--now {
                        background: #ffff76;
                      }
                      .react-calendar__tile--now:enabled:hover,
                      .react-calendar__tile--now:enabled:focus {
                        background: #ffffa9;
                      }
                      .react-calendar__tile--hasActive {
                        background: #76baff;
                      }
                      .react-calendar__tile--hasActive:enabled:hover,
                      .react-calendar__tile--hasActive:enabled:focus {
                        background: #a9d4ff;
                      }
                      .react-calendar__tile--active {
                        background: #006edc;
                        color: white;
                      }
                      .react-calendar__tile--active:enabled:hover,
                      .react-calendar__tile--active:enabled:focus {
                        background: #1087ff;
                      }
                      .react-calendar--selectRange .react-calendar__tile--hover {
                        background-color: #e6e6e6;
                      }
                    
                    
                    `}
        </style>

        <Container className="imgLogin">

          <div className="col-md-8 offset-2 divMain2" >
            <div className="bordinha">
              <Row>
                <Col className="col-md-11 offset-1">
                  <Calendar />
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