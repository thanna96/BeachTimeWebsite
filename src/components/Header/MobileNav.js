import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo2 from "../../sewhoneylogo.png";
import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";

class MobileNav extends Component {
    render() {
        return (

            <Navbar className="shadow-md mb-2 fixed-top" expand="lg" style={{ width: "100%", background:"#fffaf0" }}  >
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
                        <Row className="mx-auto">
                            <Link to='/' className="nav-link">
                                Home
                            </Link>
                        </Row>
                        <Row>
                        <Col>

                            <Link to='/SizingPage' className="nav-link">
                                Sizing
                            </Link>
                            <Link to='/About' className="nav-link">
                                About Us
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/StorePolicy' className="nav-link">
                                Policy
                            </Link>
                            <Link to='/Contact' className="nav-link">
                                Contact
                            </Link>
                        </Col>

                        </Row>
                        <Row>
                            <Dropdown className="mx-auto">
                                <Dropdown.Toggle  className="nav-link w-100" style={{ background: 'transparent', border: "none", boxShadow: "none"}}>
                                    Shop
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="" >
                                    <Dropdown.Header ><p className="font-weight-bold text-center mb-0 p-0">Women</p></Dropdown.Header>

                                    <Dropdown.Item href="/ProductList/handmade" style={{color: "#808080"}}>
                                        Hand-Made Swimwear
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/ProductList/ready-made" style={{color: "#808080"}}>
                                        Ready-Made Swimwear
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/ProductList/apparel" style={{color: "#808080"}}>
                                        Apparel
                                    </Dropdown.Item>

                                    <Dropdown.Divider />

                                    <Dropdown.Header ><p className="font-weight-bold text-center mb-0 p-0">Men</p></Dropdown.Header>
                                    <Dropdown.Item href="/MensProductList/swimwear" style={{color: "#808080"}}>
                                        Swimwear
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/MensProductList/apparel" style={{color: "#808080"}}>
                                        Apparel
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Row>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        );
    }
}

export default MobileNav;