import React, { useState } from 'react';
import Image from 'next/image'
import Router from 'next//router';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Badge
} from 'reactstrap';

const CardAgenda = (props) => {
    return(

    <Container className="imgLogin">
        <div className="col-md-8 divMain2" >
            <div className="bordinha">
                <div className="top">
                    <h3>Você ainda não tem um horário marcado!</h3>
                </div>

                <div>
                    <h4>Agende um horário e traga seu Pet para nossos cuidados,
                        um Pet limpo é um Pet feliz!</h4>
                </div>

                <br />
                <Row>
                    <Col className="col-md-3 offset-6">
                        <button type="button" className="btn" onClick={() => Router.push('/home')} >Agendar</button>
                    </Col>
                </Row>
            </div>
        </div>
    </Container>
    )
}

export default CardAgenda;
