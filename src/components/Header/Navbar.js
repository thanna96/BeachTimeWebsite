import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNav from "./MobileNav";
import Dropdown from "react-bootstrap/Dropdown";
import logo2 from '../../sewhoneylogo.png'

class Navbar extends Component {

    render() {
        return (
            <div >
                <div className="d-none d-md-block" style={{height:"100px"}}/>
                <div className="d-block d-md-none" style={{height:"150px"}}>
                    <MobileNav/>
                </div>
                <NavWrapper className="nav-link  d-none d-md-block fixed-top navbar navbar-expand-sm navbar-dark px-sm-5 shadow-md" style={{zIndex:1}}>
                    {/* Navbar for Desktop */}
                    <ul className="navbar-nav align-items-center ml-auto">
                                <img src={logo2} alt="store"
                                     className="nav-item img-fluid pr-0 "
                                     style={{maxWidth:"8%", Height:"auto"}}/>

                        <li className="nav-item nav-btn ml-auto mr-2" style={{color:'black'}}>
                            <Link to='/' className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item  mx-2" >
                            <Dropdown >
                                <Toggle className="nav-link nav-btn" style={{color:'black', background: 'transparent', border: "none", boxShadow: "none"}}>
                                    Shop
                                </Toggle>
                                <Dropdown.Menu style={{letterSpacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'black', fontSize:'12px' }} >
                                    {/*<Dropdown.Header ><p className="font-weight-bold mb-0 p-0" >Women</p></Dropdown.Header>*/}

                                    <Dropdown.Item href="/product-list/handmade"   >
                                        Women
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/mens-product-list/apparel" >
                                        Men
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/byob" >
                                        Instagram Styles
                                    </Dropdown.Item>
                                    {/*<Dropdown.Item href="/product-list/apparel"  >*/}
                                    {/*    Apparel*/}
                                    {/*</Dropdown.Item>*/}

                                    {/*<Dropdown.Divider />*/}

                                    {/*<Dropdown.Header ><p className="font-weight-bold mb-0 p-0">Men</p></Dropdown.Header>*/}
                                    {/*/!*<Dropdown.Item href="/mens-product-list/swimwear" >*!/*/}
                                    {/*/!*    Swimwear*!/*/}
                                    {/*/!*</Dropdown.Item>*!/*/}
                                    {/*<Dropdown.Item href="/mens-product-list/apparel" >*/}
                                    {/*    Apparel*/}
                                    {/*</Dropdown.Item>*/}
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        {/*<li className="nav-item nav-btn mx-2 ">*/}
                        {/*    <Link to='/byob' className="nav-link">*/}
                        {/*        Shop Instagram*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className="nav-item mx-2  " style={{color:'black'}}>
                            <Link to='/customer-care' className="nav-link" style={{color:'black'}}>
                                Customer Care
                            </Link>
                        </li>
                        <li className="  mx-2 nav-btn">
                            <Link to='/about' className="nav-link" style={{color:'black'}}>
                                About
                            </Link>
                        </li>
                        <li className="  ml-2 mr-auto" style={{color:'black'}}>
                            <Link to='/sizing-page' className="nav-link" style={{color:'black'}}>
                                Sizing
                            </Link>
                        </li>
                        <Link to='/cart' className=" nav-btn " style={{color:'black'}}>
                            <button style={{color:'black'}}>
                                <span className="mr-2 " style={{color:'black'}}>
                                    <FontAwesomeIcon icon={ faShoppingBag }/>
                                </span>
                            </button>
                        </Link>
                    </ul>
                </NavWrapper>
            </div>
        );
    }
}
const Toggle = styled(Dropdown.Toggle)`
    :after {
        display: none;
    }
`;


const NavWrapper = styled.nav`
    background:var(--mainWhite);
    .nav-link{
        color:black!important;
        font-size:1.2rem;
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
