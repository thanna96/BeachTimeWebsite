import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img from "../../banner.JPG"
import immmm from "../../mBanner3.JPG"
import Mimg4 from "../../mBanner4.JPG"
import styled from "styled-components";
import ima3 from "../../mBanner2.JPG"
import image2 from '../../BD17565E-.jpg'
import img11 from "../../IMG_5075.jpg";
import img1 from "../../34D5341D-.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import imagee from "../../DB9BDE83-.jpg"
import Mimg2 from "../../mBanner1.JPG"
import Mimg3 from "../../IMG_5131.jpg"
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Title from '../Header/Title'

class CarouselWrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            animate: true
        }
    }
    componentDidMount() {
        if(window.sessionStorage.getItem("firstLoadDone") === null){
            this.setState({
                animate: true
            })
            window.sessionStorage.setItem("firstLoadDone", 1)
        } else {
            this.setState({
                animate: false
            })
        }
    }


    render() {
        return (
            <div className='container-fluid' >

                <ProductWrapper>
                <div className={this.state.animate ? "titleStart" : "titleEnd"}>
                <div className="col-10 mx-auto mb-0 text-center text-title mt-0">
                    <h1 className="text-capitalize text-muted font-semibold text-4xl subpixel-antialiased">
                        Shop Now
                    </h1>
                </div>
                </div>
                </ProductWrapper>

                <br/>
                <Row className="p-0 m-0 mx-auto">
                    <Row className="p-0 m-0 mx-auto " >
                        <br/>
                        <ProductWrapper className="p-0 m-0 mx-auto ">
                            <div className="container m-0 p-0">
                                <Link to='/Shop' >
                                    <button className="bg-black overflow-hidden">
                                    <img className={this.state.animate ? "image-fade" : "image"} src={Mimg2} alt="aboutpic2" style={{height:"400px", width:"267px"}}/>
                                        <div className="middle">
                                            <div className="text">Women's Swim</div>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </ProductWrapper>
                        <Col className="p-0 mb-2">
                        <ProductWrapper className="p-0 m-0">
                            <div className="container m-0 p-0">
                                <Link to='/Shop' className="m-0 p-0">
                                    <button className="bg-black m-0 p-0 overflow-hidden">
                                        <img className={this.state.animate ? "image-fade" : "image"} src={image2} alt="aboutpic2" style={{height:"200px", width:"267px"}}/>
                                        <div className="middle  p-0 ">
                                            <div className="text m-0 p-0">Women's Apparel</div>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </ProductWrapper>
                        <ProductWrapper className="p-0 -mt-2">
                            <div className="container m-0 p-0">
                                <Link to='/Shop' className="m-0 p-0">
                                    <button className="bg-black m-0 p-0 overflow-hidden">
                                        <img className={this.state.animate ? "image-fade" : "image"} src={imagee} alt="aboutpic2" style={{height:"200px", width:"267px"}}/>
                                        <div className="middle m-0 p-0">
                                            <div className="text m-0 p-0">Women's Apparel</div>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </ProductWrapper>
                        </Col>
                        <ProductWrapper>
                            <div className="container p-0">
                                <Link to='/Shop' >
                                    <button className="bg-black overflow-hidden">
                                        <img className={this.state.animate ? "image-fade" : "image"} src={Mimg3} alt="aboutpic2" style={{height:"400px", width:"267px"}}/>
                                        <div className="middle">
                                            <div className="text">Women's Swim</div>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </ProductWrapper>
                        <ProductWrapper className="p-0 m-0 mx-auto ">
                        <div className="container m-0 p-0">
                            <Link to='/Shop' >
                                <button className="bg-black overflow-hidden">
                                    <img className={this.state.animate ? "image-fade" : "image"} src={immmm} alt="aboutpic2" style={{height:"400px", width:"267px"}}/>
                                    <div className="middle">
                                        <div className="text">Women's Swim</div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </ProductWrapper>
                        </Row>
                </Row>
                <Row className="p-0 m-0 mx-auto">
                    <Row className="p-0 m-0 mx-auto " >

                        <Col className="p-0 m-0 my-auto">
                        <ProductWrapper className="p-0 -mt-4">
                            <div className="container m-0 p-0">
                                <Link to='/Shop' className="m-0 p-0">
                                    <button className="bg-black m-0 p-0 overflow-hidden">
                                        <img className={this.state.animate ? "image-fade" : "image"} src={img1} alt="aboutpic2" style={{height:"200px", width:"267px"}}/>
                                        <div className="middle  p-0 ">
                                            <div className="text m-0 p-0">Women's Apparel</div>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </ProductWrapper>
                            <ProductWrapper className="p-0 -mt-2">
                                <div className="container m-0 p-0">
                                    <Link to='/Shop' className="m-0 p-0">
                                        <button className="bg-black m-0 p-0 overflow-hidden">
                                            <img className={this.state.animate ? "image-fade" : "image"} src={img11} alt="aboutpic2" style={{height:"200px", width:"267px"}}/>
                                            <div className="middle m-0 p-0">
                                                <div className="text m-0 p-0">Women's Apparel</div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </ProductWrapper>
                        </Col>
                            <ProductWrapper className="p-0 -mt-4">
                                <div className="container p-0">
                                    <Link to='/Shop' >
                                        <button className="bg-black overflow-hidden">
                                            <img className={this.state.animate ? "image-fade" : "image"} src={Mimg4} alt="aboutpic2" style={{height:"400px", width:"267px"}}/>
                                            <div className="middle">
                                                <div className="text">Women's Swim</div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </ProductWrapper>
                        <Col className="p-0 m-0 my-auto">
                            <ProductWrapper className="p-0 -mt-4">
                                <div className="container m-0 p-0">
                                    <Link to='/Shop' className="m-0 p-0">
                                        <button className="bg-black m-0 p-0 overflow-hidden">
                                            <img className={this.state.animate ? "image-fade" : "image"} src={imagee} alt="aboutpic2" style={{height:"200px", width:"267px"}}/>
                                            <div className="middle  p-0 ">
                                                <div className="text m-0 p-0">Women's Apparel</div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </ProductWrapper>
                            <ProductWrapper className="p-0 -mt-2">
                                <div className="container m-0 p-0">
                                    <Link to='/Shop' className="m-0 p-0">
                                        <button className="bg-black m-0 p-0 overflow-hidden">
                                            <img className={this.state.animate ? "image-fade" : "image"} src={image2} alt="aboutpic2" style={{height:"200px", width:"267px"}}/>
                                            <div className="middle m-0 p-0">
                                                <div className="text m-0 p-0">Women's Apparel</div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </ProductWrapper>
                        </Col>
                        <ProductWrapper className="p-0 -mt-4">
                            <div className="container p-0">
                                <Link to='/Shop' >
                                    <button className="bg-black overflow-hidden">
                                        <img className={this.state.animate ? "image-fade" : "image"} src={ima3} alt="aboutpic2" style={{height:"400px", width:"267px"}}/>
                                        <div className="middle">
                                            <div className="text">Women's Swim</div>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </ProductWrapper>
                    </Row>
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


const ProductWrapper = styled.div`
    .container {
  position: relative;
  width: 100%;
}

.titleStart {
    opacity: 0.4;
    transition: 2s ease;
}

.titleEnd {
    opacity: 1;
    transition: 2s ease;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.image-fade {
  opacity: 0.5;
  transform: scale(1.07);
  display: block;
  width: 100%;
  transition-property: initial;
  transition: 2s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.7;
}


.container:hover .middle {
    top: 70%;
  opacity: 1;
}

.text {
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
`;

export default CarouselWrapper;