import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img from "../../banner.JPG"
import Mimg4 from "../../mBanner2.JPG"
import img1 from "../../croppedLogo.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Mimg2 from "../../mBanner4.JPG"
import Mimg3 from "../../mBanner3.JPG"
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";


class CarouselWrapper extends Component {

    render() {
        return (
            <div className='container-fluid' >
                <Row>
                    <Col>
                        <br/><br/>
                        <div className="button-container">
                            <img className="rounded mx-auto d-block img-fluid" src={Mimg2} alt="aboutpic2" />
                            <span>
                            <Link to='/ProductList'>
                                <Button variant="outline-light" >
                                    Shop Now
                                </Button>
                            </Link>
                            </span>
                        </div>
                    </Col>
                    <Col>
                        <Col>
                            <img className="rounded mx-auto my-auto d-block img-fluid" src={img1} alt="aboutpic2" />
                            <Card className="text-center text-muted" border="white">
                                <Card.Body>
                                    <Card.Text>
                                        <h4>Check out the newest hand made swimsuits from our Sew Honey Summer 2020 Collection</h4>
                                    </Card.Text>
                                    <Link to='/ProductList'>
                                        <Button variant="outline-dark">Browse Collection</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                            <div className="button-container">
                                <img className="rounded mx-auto d-block img-fluid" src={Mimg4} alt="aboutpic2" />
                                <span>
                            <Link to='/ProductList'>
                                <Button variant="outline-light" >
                                    Shop Now
                                </Button>
                            </Link>
                            </span>
                            </div>
                        </Col>
                    </Col>
                    <Col>
                        <br/><br/>
                        <div className="button-container">
                            <img className="rounded mx-auto d-block img-fluid" src={Mimg3} alt="aboutpic2" />
                            <span>
                            <Link to='/ProductList'>
                                <Button variant="outline-light" >
                                    Shop Now
                                </Button>
                            </Link>
                            </span>
                        </div>
                    </Col>
                </Row>

{/*<Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">*/}
{/*    <div key="content-3" className="each-slide">*/}
{/*        <img src={slideImages[0]} alt=""/>*/}
{/*    </div>*/}
{/*    <div key="content-3" className="each-slide">*/}
{/*        <img src={slideImages[1]} alt=""/>*/}
{/*    </div>*/}
{/*    <div key="content-3" className="each-slide">*/}
{/*        <img src={slideImages[2]} alt=""/>*/}
{/*    </div>*/}
{/*</Carousel>*/}
            </div>

        );
    }
}


export default CarouselWrapper;