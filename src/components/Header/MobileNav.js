import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo2 from "../../croppedLogo2.jpg";
import Figure from "react-bootstrap/Figure";

class MobileNav extends Component {
    render() {
        return (

            <Navbar bg="white" expand="lg" style={{ width: "100%" }} >
                <Navbar.Brand >
                    <Link to='/'>
                        <Figure.Image src={logo2}  width={140}
                                      height={80}
                                      alt="171x180"
                        />
                    </Link>
                </Navbar.Brand>
                <Link to='/Cart' className="nav-link">
                    <Button variant="white">
                        <span className="mr-2 text-muted">
                            <FontAwesomeIcon icon={ faShoppingCart }/>
                        </span> Cart
                    </Button>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto text-center">
                        <Link to='/' className="nav-link">
                            Home
                        </Link>
                        <Link to='/ProductList' className="nav-link">
                            Shop
                        </Link>
                        <Link to='/About' className="nav-link">
                            About Us
                        </Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/SizingPage' className="nav-link">
                                    Sizing
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/StorePolicy' className="nav-link">
                                    Policy
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to='/Contact' className="nav-link">
                                    Contact
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        );
    }
}

export default MobileNav;