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

            <Navbar className="shadow-md mb-2 fixed-top" expand="lg" style={{ width: "100%", background:"white" }}  >
                <Navbar.Brand >
                    <Link to='/'>
                        <Figure.Image src={logo2}  width={140}
                                      height={80}
                                      alt="171x180"/>
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
                        <Col>
                            <Link to='/about' className="nav-link">
                                About
                            </Link>
                            <Link to='/customer-care' className="nav-link">
                                Customer Care
                            </Link>
                            <Link to='/sizing-page' className="nav-link">
                                Sizing
                            </Link>
                        </Col>
                        <Row>
                            <Dropdown className="mx-auto" >
                                <Dropdown.Toggle  className="nav-link w-100" style={{ background: 'transparent', border: "none", boxShadow: "none"}}>
                                    Shop
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {/*<Dropdown.Header ><p className="font-weight-bold text-center mb-0 p-0">Women</p></Dropdown.Header>*/}

                                    <Dropdown.Item href="/product-list/handmade" style={{color: "#808080"}}>
                                        Women
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/mens-product-list/apparel" style={{color: "#808080"}}>
                                        Men
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/byob" style={{color: "#808080"}}>
                                        Instagram Styles
                                    </Dropdown.Item>

                                    {/*<Dropdown.Divider />*/}

                                    {/*<Dropdown.Header ><p className="font-weight-bold text-center mb-0 p-0">Men</p></Dropdown.Header>*/}
                                    {/*/!*<Dropdown.Item href="/mens-product-list/swimwear" style={{color: "#808080"}}>*!/*/}
                                    {/*/!*    Swimwear*!/*/}
                                    {/*/!*</Dropdown.Item>*!/*/}
                                    {/*<Dropdown.Item href="/mens-product-list/apparel" style={{color: "#808080"}}>*/}
                                    {/*    Apparel*/}
                                    {/*</Dropdown.Item>*/}
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