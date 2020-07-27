import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNav from "./MobileNav";
import Button from "react-bootstrap/Button";

class Navbar extends Component {

    render() {
        return (
            <div>
                <div className="d-block d-md-none">
                    <MobileNav/>
                </div>
                <NavWrapper className="nav-link navbar navbar-expand-sm navbar-dark px-sm-5 ">
                    {/* Navbar for Desktop */}
                    <ul className="navbar-nav align-items-center mx-auto">
                        {/*<li className="nav-item mr-auto ml-auto">*/}
                        {/*    <Link to='/'>*/}
                        {/*        <img src={logo2} alt="store"*/}
                        {/*             className="img-fluid nav-link"*/}
                        {/*        />*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className="nav-item mr-auto ml-auto">
                            <Link to='/' className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mr-auto ml-auto">
                            <Link to='/Shop' className="nav-link">
                                Shop
                            </Link>
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

                {/*<TitleWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 " >*/}

                    {/* Title for Mobile Devices */}

                    {/*<ul className="nav-link-mobile navbar-nav align-items-center mx-auto">*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <Link to='/StorePolicy' className="nav-link-mobile">*/}
                    {/*            <span className="mr-2">Policy</span>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    /!*<li className="nav-item" >*!/*/}
                    {/*    /!*    <Link to='/Login' className="ml-2 nav-link-mobile">*!/*/}
                    {/*    /!*        <span className="mr-2">Login</span>*!/*/}
                    {/*    /!*    </Link>*!/*/}
                    {/*    /!*</li>*!/*/}
                    {/*    <li className="nav-item" >*/}
                    {/*        <Link to='/Cart' className="nav-link-mobile ">*/}
                    {/*            <ButtonContainer>*/}
                    {/*                <span className="mr-2 text-muted">*/}
                    {/*                    <FontAwesomeIcon icon={ faShoppingCart }/>*/}
                    {/*                </span> Cart*/}
                    {/*            </ButtonContainer>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}

                    {/*<div className="nav-link-mobile row">*/}
                    {/*    <div className="mx-auto my-2">*/}
                    {/*        <Link to='/'>*/}
                    {/*            <img src={logo} alt="store"*/}
                    {/*                 className="img-fluid"*/}
                    {/*            />*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="nav-link title sewtitle ">*/}
                    {/*    <div className="mx-auto my-2 container-fluid">*/}
                    {/*        <Link to='/'>*/}
                    {/*            <img src={logo2} alt="store"*/}
                    {/*                 className="img-fluid"*/}
                    {/*            />*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*    /!*<h1 className="text-title">SEW HONEY SWIM</h1>*!/*/}
                    {/*</div>*/}

                    {/* Title for Desktop */}
                {/*    <ul className="navbar-nav align-items-center ml-auto">*/}
                {/*        <li className="nav-item ml-2">*/}
                {/*            <Link to='/StorePolicy' className="nav-link">*/}
                {/*                Policy*/}
                {/*            </Link>*/}
                {/*        </li>*/}
                {/*        <li className="nav-item ml-2" >*/}
                {/*            <Link to='/Login' className="nav-link">*/}
                {/*                Login*/}
                {/*            </Link>*/}
                {/*        </li>*/}

                {/*    <Link to='/Cart' className="nav-link ml-auto">*/}
                {/*        <ButtonContainer>*/}
                {/*        <span className="mr-2">*/}
                {/*            <FontAwesomeIcon icon={ faShoppingCart }/>*/}
                {/*        </span> Cart*/}
                {/*        </ButtonContainer>*/}
                {/*    </Link>*/}
                {/*</ul>*/}
                {/*</TitleWrapper>*/}

                {/*<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">*/}

                    {/* Navbar for Desktop */}
                    {/*<ul className="navbar-nav align-items-center  mx-auto">*/}
                    {/*    <li className="nav-item ">*/}
                    {/*        <Link to='/' className="nav-link">*/}
                    {/*            Home*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item ">*/}
                    {/*        <Link to='/ProductList' className="nav-link">*/}
                    {/*            Shop*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item " >*/}
                    {/*        <Link to='/About' className="nav-link">*/}
                    {/*            About Us*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item " >*/}
                    {/*        <Link to='/Contact' className="nav-link">*/}
                    {/*            Contact*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}

                    {/* Navbar for Mobile Devices */}
                    {/*<div className="nav-link-mobile container-fluid ">*/}
                    {/*    <ul className="nav-link-mobile navbar-nav mx-auto align-items-center">*/}
                    {/*        <li className="nav-item ">*/}
                    {/*            <Link to='/' className="nav-link-mobile">*/}
                    {/*                <span className="mr-3">Home</span>*/}
                    {/*            </Link>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item ">*/}
                    {/*          <Link to='/ProductList' className="nav-link-mobile">*/}
                    {/*              <span className="mr-3">Shop</span>*/}
                    {/*            </Link>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item " >*/}
                    {/*           <Link to='/About' className="nav-link-mobile">*/}
                    {/*                <span className="mr-3">About</span>*/}
                    {/*            </Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*    <ul className="nav-link-mobile navbar-nav mx-auto">*/}
                    {/*    <li className="nav-item " >*/}
                    {/*        <Link to='/Contact' className="nav-link-mobile">*/}
                    {/*            <span className="mr-3">Contact</span>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item " >*/}
                    {/*        <Link to='/SizingPage' className="nav-link-mobile">*/}
                    {/*            <span className="mr-3">Sizing</span>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                {/*</NavWrapper>*/}
            </div>
        );
    }
}

// const TitleWrapper = styled.nav`
//     background:var(--mainWhite);
//     .nav-link{
//         color:#808080!important;
//         font-size:1.6rem;
//         text-transform:capitalize !important;
//         display: block;
//     }
//     .nav-link-mobile{
//         color:#808080!important;
//         font-size:1.6rem;
//         text-transform:capitalize !important;
//         display: none;
//     }
//
//     @media all and (max-width: 768px){
//         .nav-link { display: none; }
//         .nav-link-mobile {
//             ul { display: table; }
//             li { display: table-cell; }
//             display : inline-block;
//         }
//     }
//`;


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
