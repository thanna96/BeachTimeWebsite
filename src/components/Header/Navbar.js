import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNav from "./MobileNav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import logo2 from '../../croppedLogo.jpg'
class Navbar extends Component {

    render() {
        return (
            <div >
                <div className="d-none d-md-block" style={{height:"125px"}}/>
                <div className="d-block d-md-none">
                    <MobileNav/>
                </div>
                <NavWrapper className="nav-link  d-none d-md-block fixed-top navbar navbar-expand-sm navbar-dark px-sm-5 " style={{zIndex:1}}>

                    {/* Navbar for Desktop */}
                    <ul className="navbar-nav align-items-center mx-auto">

                                <img src={logo2} alt="store"
                                     className=" img-fluid pr-0 pt-3"
                                     style={{maxWidth:"15%", Height:"auto"}}
                                />


                        <li className="nav-item mr-auto ml-auto ">
                            <Link to='/' className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mr-auto ml-auto ">
                            <Dropdown>
                                <Dropdown.Toggle drop="none" className="nav-link" style={{ background: 'transparent', border: "none", boxShadow: "none"}}>
                                    Shop
                                </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <Dropdown.Header ><p className="font-weight-bold text-center mb-0 p-0">Women</p></Dropdown.Header>

                                    <Dropdown.Item href="/ProductList/handmade" style={{color: "#808080"}}>
                                        Handmade Swimwear
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/ProductList/swimwear" style={{color: "#808080"}}>
                                        Swimwear
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
                        </li>
                        <li className="nav-item mr-auto ml-auto" >
                            <Link to='/About' className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item mr-auto ml-auto" >
                            <Link to='/Contact' className="nav-link">
                                Contact
                            </Link>
                        </li>

                            <li className="nav-item mr-auto ml-auto">
                                <Link to='/StorePolicy' className="nav-link">
                                    Policy
                                </Link>
                            </li>
                        <li className="nav-item mr-auto ml-auto" >
                            <Link to='/SizingPage' className="nav-link">
                                Sizing
                            </Link>
                        </li>
                        <Link to='/Cart' className="nav-link mr-auto ml-auto">
                            <Button variant="white">
                                <span className="mr-2 text-muted">
                                    <FontAwesomeIcon icon={ faShoppingCart }/>
                                </span>
                            </Button>
                        </Link>
                    </ul>
                </NavWrapper>
            </div>
        );
    }
}



const NavWrapper = styled.nav`
    background:var(--mainWhite);
    .nav-link{
        color:#808080!important;
        font-size:1.6rem;
        text-transform:capitalize !important;
    }
    .nav-link-mobile{
        color:#808080!important;
        font-size:1.6rem;
        text-transform:capitalize !important;
        display: none;
    }
    
    @media all and (max-width: 768px){
        .nav-link { display: none; }
        .nav-link-mobile {
            ul { display: table; }
            li { display: table-cell; }
            display : inline-block;
        }
    }
    
`;

export default Navbar;
