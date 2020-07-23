import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import img from "../../croppedLogo.jpg";
import Mimg2 from "../../mBanner1.JPG";
import Mimg3 from "../../mens.jpg"
import Col from "react-bootstrap/Col";

class Shop extends Component {
    render() {
        return (
            <div className="col-12 mx-auto col-md-8">
                <div className="d-none d-md-block">
                <Row>
                <Col>
                    <div className="button-container mx-auto">
                        <img className="rounded mx-auto d-block img-fluid" src={Mimg2} alt="aboutpic2"  />
                        <span>
                            <Link to='/ProductList/women'>
                                <Button variant="outline-light" >
                                    Shop Women
                                </Button>
                            </Link>
                            </span>
                    </div>
                </Col>
                <br/>
                <Col>
                    <div className="button-container mx-auto">
                        <img className="rounded mx-auto d-block img-fluid" src={Mimg3} alt="aboutpic2"  />
                        <span>
                            <Link to='/ProductList/men'>
                                <Button variant="outline-light" >
                                    Shop Men
                                </Button>
                            </Link>
                            </span>
                    </div>
                </Col>
                </Row>
                </div>
                <div className="d-block d-md-none col-6 mx-auto">
                    <Row>
                        <div className="button-container mx-auto">
                            <img className="rounded mx-auto d-block img-fluid" src={Mimg2} alt="aboutpic2"  />
                            <span>
                            <Link to='/ProductList/women'>
                                <Button variant="outline-light" >
                                    Shop Women
                                </Button>
                            </Link>
                            </span>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div className="button-container mx-auto">
                            <img className="rounded mx-auto d-block img-fluid" src={Mimg3} alt="aboutpic2"  />
                            <span>
                            <Link to='/ProductList/men'>
                                <Button variant="outline-light" >
                                    Shop Men
                                </Button>
                            </Link>
                            </span>
                        </div>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Shop;