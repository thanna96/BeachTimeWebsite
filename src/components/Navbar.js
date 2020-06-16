import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {

    render() {
        return (
            <div>
                <TitleWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
                    {/*<Link to='/'>*/}
                    {/*    <img src={logo} alt="store"*/}
                    {/*         className="navbar-brand"/>*/}
                    {/*</Link>*/}
                    <div className="title">
                        <h1 className="text-title">SEW HONEY SWIM</h1>
                    </div>
                    <ul className="navbar-nav align-items-center ml-auto">
                        <li className="nav-item ml-2">
                            <Link to='/StorePolicy' className="nav-link">
                                Policy
                            </Link>
                        </li>
                        <li className="nav-item ml-2" >
                            <Link to='/Login' className="nav-link">
                                Login
                            </Link>
                        </li>

                    <Link to='/Cart' className="ml-auto">
                        <ButtonContainer>
                        <span className="mr-2">
                            <FontAwesomeIcon icon={ faShoppingCart }/>
                        </span> Cart
                        </ButtonContainer>
                    </Link>
                </ul>
                </TitleWrapper>

                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
                    <ul className="navbar-nav align-items-center  mx-auto">
                        <li className="nav-item ">
                            <Link to='/' className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/ProductList' className="nav-link">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item " >
                            <Link to='/About' className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item " >
                            <Link to='/Contact' className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </NavWrapper>
                <hr/>
            </div>
        );
    }
}

const TitleWrapper = styled.nav`
    background:var(--mainWhite);
    .nav-link{
        color:var(--mainBlack)!important;
        font-size:1rem;
        text-transform:capitalize !important;
    }
`;


const NavWrapper = styled.nav`
    background:var(--mainWhite);
    .nav-link{
        color:var(--mainBlack)!important;
        font-size:1.5rem;
        text-transform:capitalize !important;
    }
    text-align: center;
`;

export default Navbar;
