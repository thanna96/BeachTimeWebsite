import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {ButtonContainer} from '../Styles/Button';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../croppedLogo.jpg";
import logo2 from "../../croppedLogo2.jpg";

class Navbar extends Component {

    render() {
        return (
            <div >
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
                    {/* Navbar for Desktop */}
                    <ul className="navbar-nav align-items-center mx-auto">
                        <li className="nav-item mr-auto ml-auto">
                            <Link to='/' className="nav-link">
                                <p className="text-muted">Home</p>
                            </Link>
                        </li>
                        <li className="nav-item mr-auto ml-auto">
                            <Link to='/ProductList' className="nav-link">
                                <p className="text-muted">Shop</p>
                            </Link>
                        </li>
                        <li className="nav-item mr-auto ml-auto" >
                            <Link to='/About' className="nav-link">
                                <p className="text-muted">About Us</p>
                            </Link>
                        </li>
                        <li className="nav-item mr-auto ml-auto" >
                            <Link to='/Contact' className="nav-link">
                                <p className="text-muted">Contact</p>
                            </Link>
                        </li>
                        <li className="nav-item mr-auto ml-auto">
                            <Link to='/'>
                                <img src={logo2} alt="store"
                                     className="img-fluid nav-link"
                                />
                            </Link>
                        </li>
                            <li className="nav-item mr-auto ml-auto">
                                <Link to='/StorePolicy' className="nav-link">
                                    <p className="text-muted">Policy</p>
                                </Link>
                            </li>
                            <li className="nav-item mr-auto ml-auto" >
                                <Link to='/Login' className="nav-link">
                                    <p className="text-muted">Login</p>
                                </Link>
                            </li>

                            <Link to='/Cart' className="nav-link mr-auto ml-auto">
                                <ButtonContainer>

                        <span className="mr-2 text-muted">
                            <FontAwesomeIcon icon={ faShoppingCart }/>
                        </span>
                                    Cart
                                </ButtonContainer>
                            </Link>
                    </ul>
                </NavWrapper>

                <TitleWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 " >

                    {/* Title for Mobile Devices */}
                    <ul className="nav-link-mobile navbar-nav align-items-center mx-auto">
                        <li className="nav-item">
                            <Link to='/StorePolicy' className="nav-link-mobile">
                                <span className="mr-2">Policy</span>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to='/Login' className="ml-2 nav-link-mobile">
                                <span className="mr-2">Login</span>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to='/Cart' className="nav-link-mobile ">
                                <ButtonContainer>
                                    <span className="mr-2">
                                        <FontAwesomeIcon icon={ faShoppingCart }/>
                                    </span> Cart
                                </ButtonContainer>
                            </Link>
                        </li>
                    </ul>

                    <div className="nav-link-mobile row">
                        <div className="mx-auto my-2">
                            <Link to='/'>
                                <img src={logo} alt="store"
                                     className="img-fluid"
                                />
                            </Link>
                        </div>
                    </div>

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
                </TitleWrapper>

                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">

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
                    <div className="nav-link-mobile container-fluid ">
                        <ul className="nav-link-mobile navbar-nav mx-auto  ">
                            <li className="nav-item ">
                                <Link to='/' className="nav-link-mobile">
                                    <span className="mr-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                              <Link to='/ProductList' className="nav-link-mobile">
                                  <span className="mr-2">Shop</span>
                                </Link>
                            </li>
                            <li className="nav-item " >
                               <Link to='/About' className="nav-link-mobile">
                                    <span className="mr-2">About Us</span>
                                </Link>
                            </li>
                            <li className="nav-item " >
                                <Link to='/Contact' className="nav-link-mobile">
                                    <span className="mr-2">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </NavWrapper>
                <hr style={{"background":"#FFFF00"}}/>
            </div>
        );
    }
}

const TitleWrapper = styled.nav`
    background:var(--mainWhite);
    .nav-link{
        color:var(--mainBlack)!important;
        font-size:1.6rem;
        text-transform:capitalize !important;
        display: block;
    }
    .nav-link-mobile{
        color:var(--mainBlack)!important;
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


const NavWrapper = styled.nav`
    background:var(--mainWhite);
    .nav-link{
        color:var(--mainBlack)!important;
        font-size:1.9rem;
        text-transform:capitalize !important;
    }
    .nav-link-mobile{
        color:var(--mainBlack)!important;
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
