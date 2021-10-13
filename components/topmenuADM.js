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
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Badge
} from 'reactstrap';


const MenuADM = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <style>
                {`.menu-custom{
                    background-color:#fff !important;
                }
                .textcolor{
                    color:#000 !important;
                    text-decoration: none !important;
                }
                .bkdrop DropdownItem:hover{
                    color:#c0c0c0;
                }
                `}
            </style>
            <Navbar className="menu-custom" dark expand="md" fixed="top">
                <Container>
                    <NavbarBrand href="/">
                        <Image
                            src="/logo.png"
                            alt="Picture of the author"
                            width={200}
                            height={105}
                        />
                    </NavbarBrand>

                    <div className="sidebar-sticky"></div>

                    <NavbarToggler onClick={toggle} />
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="textcolor" href="/cockpit" >Cockpit</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="textcolor" href="/agendaADM" >Agenda</NavLink>
                        </NavItem>

                    </Nav>

                </Container>

            </Navbar>
        </div>
    );
}

export default MenuADM;