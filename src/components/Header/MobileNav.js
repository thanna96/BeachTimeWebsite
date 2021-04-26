import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
// import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button"
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo2 from "../../sewhoneylogo.png";
import Figure from "react-bootstrap/Figure";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Dropdown from "react-bootstrap/Dropdown";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import img1 from "../../bumblebee-icon-20.jpg";
import img from "../../banner.JPG";

class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
        }
        this.openSidebar = this.openSidebar.bind(this);
    }

    openSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen,
        });
    }


    render() {
        return (

            <Navbar className="shadow-md mb-2 fixed-top" expand="lg" style={{width: "100%", background: "white"}}>
                <div onClick={() => {
                    this.openSidebar()
                }}
                    className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
                        this.state.sidebarOpen === true ? "block" : "hidden"
                    }`}
                />
                <div className="mobile-nav inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0"
                    style={this.state.sidebarOpen === true ? {display: 'block'} : {display: "none"}}>
                    <Link to='/Cart'  >
                        <Button variant="white" className="float-left" >
                        <span className="mr-2 text-muted" style={{fontSize:'30px'}}>
                            <FontAwesomeIcon icon={ faShoppingBag }/>
                        </span>
                        </Button>
                    </Link>

                    <div className="flex items-center justify-center text-center w-100 ">
                        <Link to='/'>
                            <Figure.Image src={logo2} width={140}
                                          height={80}
                                          alt="171x180"/>
                        </Link>
                    </div>
                    <Navigation
                        activeItemId="/"
                        onSelect={({itemId}) => {
                            if (itemId) {
                                window.location = itemId;
                            }
                        }}
                        items={[
                            {
                                title: 'Home',
                                itemId: '/',
                                // you can use your own custom Icon component as well
                                // icon is optional
                                elemBefore: () => <img alt='' src={img1} height='20px' width="20px"/>,
                            },
                            {
                                title: 'Shop',
                                elemBefore: () => <img alt='' src={img1} height='20px' width="20px"/>,
                                subNav: [
                                    {
                                        title: 'Swim',
                                        itemId: '/product-list/handmade',
                                    },
                                    {
                                        title: 'Apparel',
                                        itemId: '/product-list/apparel',
                                    },
                                    {
                                        title: 'Instagram Styles',
                                        itemId: '/product-list/instagram-style',
                                    },
                                ],
                            },
                            {
                                title: 'Customer Care',
                                itemId: '/customer-care',
                                // you can use your own custom Icon component as well
                                // icon is optional
                                elemBefore: () => <img alt='' src={img1} height='20px' width="20px"/>,
                            },
                            {
                                title: 'About',
                                itemId: '/about',
                                // you can use your own custom Icon component as well
                                // icon is optional
                                elemBefore: () => <img alt='' src={img1} height='20px' width="20px"/>,
                            },
                            {
                                title: 'Sizing',
                                itemId: '/sizing-page',
                                // you can use your own custom Icon component as well
                                // icon is optional
                                elemBefore: () => <img alt='' src={img1} height='20px' width="20px"/>,
                            },
                        ]}
                    />
                </div>

                <Navbar.Brand>
                    <Link to='/'>
                        <Figure.Image src={logo2} width={140}
                                      height={80}
                                      alt="171x180"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {
                    this.openSidebar()
                }}/>
                {/*<Link to='/Cart' className="nav-link">*/}
                {/*    <Button variant="white">*/}
                {/*        <span className="mr-2 text-muted">*/}
                {/*            <FontAwesomeIcon icon={ faShoppingBag }/>*/}
                {/*        </span>*/}
                {/*    </Button>*/}
                {/*</Link>*/}

                {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                {/*    <Nav className="mr-auto text-center">*/}
                {/*        <Row className="mx-auto">*/}
                {/*            <Link to='/' className="nav-link">*/}
                {/*                Home*/}
                {/*            </Link>*/}
                {/*        </Row>*/}
                {/*        <Col>*/}
                {/*            <Link to='/about' className="nav-link">*/}
                {/*                About*/}
                {/*            </Link>*/}
                {/*            <Link to='/customer-care' className="nav-link">*/}
                {/*                Customer Care*/}
                {/*            </Link>*/}
                {/*            <Link to='/sizing-page' className="nav-link">*/}
                {/*                Sizing*/}
                {/*            </Link>*/}
                {/*        </Col>*/}
                {/*        <Row>*/}
                {/*            <Dropdown className="mx-auto" >*/}
                {/*                <Dropdown.Toggle  className="nav-link w-100" style={{ background: 'transparent', border: "none", boxShadow: "none"}}>*/}
                {/*                    Shop*/}
                {/*                </Dropdown.Toggle>*/}
                {/*                <Dropdown.Menu>*/}
                {/*                    /!*<Dropdown.Header ><p className="font-weight-bold text-center mb-0 p-0">Women</p></Dropdown.Header>*!/*/}

                {/*                    <Dropdown.Item href="/product-list/handmade" style={{color: "#808080"}}>*/}
                {/*                        Swim*/}
                {/*                    </Dropdown.Item>*/}
                {/*                    <Dropdown.Item href="/mens-product-list/apparel" style={{color: "#808080"}}>*/}
                {/*                        Apparel*/}
                {/*                    </Dropdown.Item>*/}
                {/*                    <Dropdown.Item href="/product-list/instagram-styles" style={{color: "#808080"}}>*/}
                {/*                        Instagram Styles*/}
                {/*                    </Dropdown.Item>*/}

                {/*<Dropdown.Divider />*/}

                {/*<Dropdown.Header ><p className="font-weight-bold text-center mb-0 p-0">Men</p></Dropdown.Header>*/}
                {/*/!*<Dropdown.Item href="/mens-product-list/swimwear" style={{color: "#808080"}}>*!/*/}
                {/*/!*    Swimwear*!/*/}
                {/*/!*</Dropdown.Item>*!/*/}
                {/*<Dropdown.Item href="/mens-product-list/apparel" style={{color: "#808080"}}>*/}
                {/*    Apparel*/}
                {/*</Dropdown.Item>*/}
                {/*                </Dropdown.Menu>*/}
                {/*            </Dropdown>*/}
                {/*        </Row>*/}
                {/*    </Nav>*/}
                {/*</Navbar.Collapse>*/}

            </Navbar>
        );
    }
}

export default MobileNav;