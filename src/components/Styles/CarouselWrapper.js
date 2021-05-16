import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import CardGroup from "react-bootstrap/CardGroup";
// import img2 from "../../aboutPicture2.JPG"
// import img from "../../banner.JPG"
import immmm from "../../mBanner3.JPG"
// import Mimg4 from "../../mBanner4.JPG"
import styled from "styled-components";
// import ima3 from "../../mBanner2.JPG"
// import image2 from '../../BD17565E-.jpg'
// import img11 from "../../IMG_5075.jpg";
// import img1 from "../../34D5341D-.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import imagee from "../../DB9BDE83-.jpg"
import Mimg2 from "../../mBanner1.JPG"
// import Mimg3 from "../../IMG_5131.jpg"
// import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import Title from '../Header/Title';
// import logo from "../../sewhoneylogo.png";
// import CardColumns from "react-bootstrap/CardColumns";
// import logo2 from "../../sewhoneylogo.png";
// import About from "../AboutPage/About";
import Contact from "../ContactPage/Contact";
import {MDBIcon} from "mdbreact";
import MobileCarousel from "../Styles/MobileCarousel";
import Carousel from 'react-bootstrap/Carousel'
import Button from "react-bootstrap/Button";

// let images = [
//     ima3,image2,img11,img1,imagee,Mimg3,immmm,Mimg4
// ]
class CarouselWrapper extends Component {

    constructor(props) {
        super(props)
        this.state = {
            animate: true
        }
    }

    componentDidMount() {

        if (window.sessionStorage.getItem("firstLoadDone") === '1') {
            this.setState({
                animate: false
            })

        } else {
            this.setState({
                animate: true
            })
            window.sessionStorage.setItem("firstLoadDone", '1')
        }
        this.setState({
            animate: false
        })
    }


    render() {
        return (
            <div>

                <Row className="w-full mx-auto">
                    <div className="pb-3 px-0 w-full pt-0 col-12">


                        <div className="img-container p-1 mt-3 mx-auto" style={{width: '75%'}}>
                            {/*<img alt='' className='w-4/5 mx-auto' src={img1} style={{height: '500px'}} />*/}
                            <p className="mx-auto w-100 d-none d-md-block"
                               style={{fontFamily: '"Montserrat", sans-serif', color: 'black', fontSize: '64px'}}>Sew
                                Honey Swim</p>
                            <p className="mx-auto w-100 d-block d-md-none" style={{
                                fontFamily: '"Montserrat", sans-serif',
                                color: 'black',
                                fontSize: '45px',
                                whiteSpace: 'nowrap'
                            }}>Sew Honey<br/> Swim</p>
                            <p className="mb-3" style={{
                                fontFamily: '"Montserrat", sans-serif',
                                color: 'black',
                                fontSize: '20px',
                                opacity: "60%"
                            }}>Made to order swimwear.</p>
                            {/*<Link to='/product-list/handmade' className="mx-auto">*/}
                            {/*    <button className="py-4 px-5 mb-2" style={{letterSpacing:'2px',fontFamily:'"Montserrat", sans-serif', color:'black', fontSize:'14px',backgroundColor:'#f4f4f4'}}>SHOP NOW</button>*/}
                            {/*</Link>*/}

                        </div>
                    </div>
                </Row>

                <div className="mx-auto w-5/6 mb-5 d-none d-md-block">
                    <Carousel className="mx-auto">
                        <Carousel.Item interval={100}>
                            <Row className="mx-auto">
                                <Col sm={12} md={4} className="px-0">
                                    {/*<img alt=''*/}
                                    {/*     className={this.state.animate ? "image-fade image-responsive" : "image image-responsive"}*/}
                                    {/*     src={immmm}/>*/}
                                    <p style={{width: '100%', height:'380px', background:'lightsalmon'}}>&nbsp;</p>
                                </Col>
                                <Col sm={12} md={4} className="px-0">
                                    {/*<img alt=''*/}
                                    {/*     className={this.state.animate ? "image-fade image-responsive" : "image image-responsive"}*/}
                                    {/*     src={Mimg2}/>*/}
                                    <p style={{width: '100%', height:'380px', background:'grey'}}>&nbsp;</p>
                                </Col>
                                <Col sm={12} md={4} className="px-0">
                                    <p style={{width: '100%', height:'380px', background:'brown'}}>&nbsp;</p>
                                    {/*<img alt=''*/}
                                    {/*     className={this.state.animate ? "image-fade image-responsive" : "image image-responsive"}*/}
                                    {/*     src={Mimg4}/>*/}
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item interval={100}>
                            <Row className="mx-auto">
                                <Col sm={12} md={4} className="px-0">
                                    {/*<img alt=''*/}
                                    {/*     className={this.state.animate ? "image-fade image-responsive" : "image image-responsive"}*/}
                                    {/*     src={immmm}/>*/}
                                    <p style={{width: '100%', height:'380px', background:'lightcyan'}}>&nbsp;</p>
                                </Col>
                                <Col sm={12} md={4} className="px-0">
                                    {/*<img alt=''*/}
                                    {/*     className={this.state.animate ? "image-fade image-responsive" : "image image-responsive"}*/}
                                    {/*     src={Mimg2}/>*/}
                                    <p style={{width: '100%', height:'380px', background:'lightgray'}}>&nbsp;</p>
                                </Col>
                                <Col sm={12} md={4} className="px-0">
                                    <p style={{width: '100%', height:'380px', background:'yellowgreen'}}>&nbsp;</p>
                                    {/*<img alt=''*/}
                                    {/*     className={this.state.animate ? "image-fade image-responsive" : "image image-responsive"}*/}
                                    {/*     src={Mimg4}/>*/}
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="d-block d-md-none mb-5">
                    <MobileCarousel/>
                </div>

                <div className="pb-3 pt-1 text-title text-center mx-auto">
                    <p className="mb-2" style={{
                        letterSpacing: '1px',
                        fontFamily: '"Montserrat", sans-serif',
                        color: 'BLACK',
                        fontSize: '12px',
                        opacity: "60%"
                    }}>SPREAD YOUR HONEY</p>
                    <p className="mx-auto w-75" style={{fontFamily: '"Montserrat", sans-serif', color: '#1a1b1f'}}>Share
                        your adventures with #SewHoneySwim</p>
                </div>

                <hr className="w-75 mx-auto my-10"/>

                <div className="pb-1 d-block d-md-none flex px-8">
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${immmm})`}}>
                            <span>
                                  <Link to='/product-list/handmade' className="nav-link">
                                     <Button variant="outline-dark" >
                                        Shop Now
                                    </Button>
                                  </Link>
                             </span>
                        </div>
                    </div>
                </div>
                <div className="pb-10 d-block d-md-none flex px-8">
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${Mimg2})`}}>
                            <span>
                                  <Link to='/product-list/handmade' className="nav-link">
                                     <Button variant="outline-dark" >
                                        Shop Now
                                    </Button>
                                  </Link>
                             </span>
                        </div>
                    </div>
                </div>

                <div className="mb-5 d-none d-md-block">
                    <Row className="w-4/5 mx-auto">

                        <Col sm={12} md={4}>
                            <ProductWrapper className="p-1 m-0 mx- ">
                                <div className="container ">
                                    <Link to='/shop-instagram'>
                                        <button className="bg-white overflow-hidden ">
                                            {/*<img alt=''*/}
                                            {/*     className={this.state.animate ? "image-fade image-responsive" : "image image-responsive"}*/}
                                            {/*     src={immmm}/>*/}
                                            <p style={{width: '210px', height:'315px', background:'brown'}}>&nbsp;</p>
                                            <div className="middle">
                                                <div className="text">Shop</div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </ProductWrapper>
                        </Col>
                        <Col sm={12} md={4}>
                            <ProductWrapper className="p-1 m-0  ">
                                <div className="container ">
                                    <Link to='/product-list/handmade'>
                                        <button className="bg-white overflow-hidden ">
                                            {/*<img alt=''*/}
                                            {/*     className={this.state.animate ? "image-fade image-responsive" : "image image-responsive"}*/}
                                            {/*     src={Mimg2}/>*/}
                                            <p style={{width: '210px', height:'315px', background:'lightcoral'}}>&nbsp;</p>
                                            <div className="middle">
                                                <div className="text">Shop From Instagram</div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </ProductWrapper>
                        </Col>
                        <Col sm={12} md={4}>
                            <ProductWrapper className="p-1 m-0  ">
                                <div className="container ">
                                    <Link to='/product-list/handmade'>
                                        <button className="bg-white overflow-hidden ">
                                            {/*<img alt=''*/}
                                            {/*     className={this.state.animate ? "image-fade image-responsive" : "image image-responsive"}*/}
                                            {/*     src={Mimg4}/>*/}
                                            <p style={{width: '210px', height:'315px', background:'lightgoldenrodyellow'}}>&nbsp;</p>
                                            <div className="middle">
                                                <div className="text">Apparel</div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </ProductWrapper>
                        </Col>
                    </Row>
                </div>
                <hr className="w-75 mx-auto my-10"/>
                {/*<Row className="mx-auto w-75 mb-10">*/}
                {/*    <Col   className=" d-lg-none " sm={12} md={12} lg={6}>*/}
                {/*        <div className="p-3   "  >*/}
                {/*            <div className=" p-3  text-title   mx-auto">*/}
                {/*                <p className=" " style={{letterSpacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'BLACK', fontSize:'12px',opacity: "60%"}}>About</p>*/}
                {/*                <p className=" mb-6" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'36px'}}>Who we are</p>*/}
                {/*            </div>*/}
                {/*            <About/>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*    <Col  className="p-3  d-none d-lg-block "  >*/}
                {/*        <div className="p-3  vertical-center "  >*/}
                {/*            <div className=" p-3  text-title   mx-auto">*/}
                {/*                <p className=" " style={{letterSpacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'BLACK', fontSize:'12px',opacity: "60%"}}>About</p>*/}
                {/*                <p className=" mb-6" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'36px'}}>Who we are</p>*/}
                {/*            </div>*/}
                {/*            <About/>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*    <Col sm={12} md={12} lg={6}>*/}
                {/*        <img src={img2} alt="store"*/}
                {/*             className="mx-auto"*/}
                {/*             style={{ width:"563px", height:"auto"}}*/}
                {/*        />*/}
                {/*    </Col>*/}
                {/*</Row>*/}


                {/*<hr className="w-75 mx-auto my-20" />*/}

                {/*<div className="pb-3 pt-1 text-title text-center mx-auto">*/}
                {/*    <p className="mb-2" style={{letterSpacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'BLACK', fontSize:'12px',opacity: "60%"}}>Shop</p>*/}
                {/*    <p className="mx-auto  " style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'36px'}}>Swimwear That Works For You.</p>*/}
                {/*</div>*/}


                {/*<hr className="w-75 mx-auto my-20" />*/}


                <div className="  mx-auto w-75">

                    <div className="row">
                        <div className="col-md-9  mx-auto">
                            <p className="font-bold mb-6" style={{
                                fontFamily: '"Montserrat", sans-serif',
                                color: '#1a1b1f',
                                fontSize: '36px'
                            }}>Contact Us.</p>
                        </div>

                        <div className="col-md-3">
                            <div className="mb-3">
                                <a href="https://www.facebook.com/SewHoneySwim/?ref=nf&hc_ref=ARRAKOHS3x_-iRPO7-T_EwK5Ln04aL5J7gutQECf17b0uDp46kloMDbSlLUuTvfXlYk"
                                   className="fb-ic">
                                    <MDBIcon icon="facebook" size="3x" className="   mr-md-5 mr-3"/>
                                </a>
                                <a href="https://www.instagram.com/sewhoneyswim/?hl=en" className="ins-ic">
                                    <MDBIcon icon="instagram" size="3x" className="  mr-md-0 "/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Contact/>
                </div>

            </div>

        );
    }
}

//
// const Collage = styled.div`
//   .row {
//     display: flex;
//     flex-wrap: wrap;
//     padding: 0 0;
//   }
//
//   /* Create four equal columns that sits next to each other */
//   .column {
//     flex: 25%;
//     max-width: 25%;
//     padding: 0 0;
//   }
//
//   .column img {
//     margin-top: 0;
//     vertical-align: middle;
//     width: 100%;
//   }
//   @media screen and (max-width: 800px) {
//     .column {
//       flex: 50%;
//       max-width: 50%;
//     }
//   }
//
//   /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
//   @media screen and (max-width: 600px) {
//     .column {
//       flex: 100%;
//       max-width: 100%;
//     }
//   }
// `;


const ProductWrapper = styled.div`
  .container {
    position: relative;
    width: 100%;
    padding: 0;
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
    top: 110%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }

  .container:hover .image {
    opacity: 0.7;
  }


  .container:hover .middle {
    top: 45%;
    opacity: 1;
  }

  .text {
    color: white;
    font-size: 20px;
    padding: 16px 32px;
  }
`;

export default CarouselWrapper;