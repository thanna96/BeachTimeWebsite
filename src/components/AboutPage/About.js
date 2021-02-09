import React, {Component} from 'react';
// import Button from 'react-bootstrap/Button'
// import img from "../../banner.JPG"
// import Mimg2 from "../../mBanner1.JPG"
//
// import img2 from "../../aboutPicture2.JPG"
// import img3 from "../../aboutPicture.JPG"
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col"
// import {MDBIcon} from "mdbreact";
import {ButtonContainer} from "../Styles/Button";
// import logo2 from "../../sewhoneylogo.png";
class About extends Component {
    render() {
        return (
            <div className="container" >


                {/*<div className="row col-10 mx-auto col-md-6 ">*/}
                {/*    <h6 className="text-muted ">Home/</h6><h6>About</h6>*/}
                {/*</div>*/}

                {/*<h3 className="text-center text-title text-muted aboutTitle text-3xl">MEET THE SISTERS BEHIND THE LABEL</h3>*/}
                {/*    <img className="rounded mx-auto d-block img-fluid w-75" src={img} alt="aboutpic" />*/}
                {/*<br/>*/}
                {/*<div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-0">*/}
                {/*    <div className="container col">*/}
                {/*        <img className="rounded mx-auto d-block img-fluid " src={img2} alt="aboutpic2" />*/}
                {/*    </div>*/}
                {/*    <div className="container col">*/}
                {/*        <img className="rounded mx-auto d-block img-fluid " src={img2} alt="aboutpic2" />*/}
                {/*    </div>*/}
                {/*    <div className="container col">*/}
                {/*        <img className="rounded mx-auto d-block img-fluid  " src={img3} alt="aboutpic2" />*/}
                {/*    </div>*/}
                {/*    <div className="container col">*/}

                {/*    </div>*/}
                {/*</div>*/}

                {/*<Col md={4} className=" mx-auto" >*/}
                {/*    <img className="rounded mx-auto d-block img-fluid w-4/5 mb-3" src={Mimg2} alt="aboutpic" />*/}

                {/*</Col>*/}

                    <div className="mx-auto">


                            <p className="   my-2 " style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                In 2017, sew honey was founded by Gena & Gabbi Miele. What started off as a creative outlet turned
                                Into a small business. We launched sew honey because we wanted to create swimwear that makes girls
                                Feel comfortable & confident!
                            </p>
                            <p className=" my-2   mb-20" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                Sew Honey is an online boutique that specializes in making handmade swimsuits.
                                We use high quality nylon lycra fabric.
                            </p>
                            <ButtonContainer
                                className=" mx-auto text-wrap my-3 "
                                style={{fontFamily:'"Montserrat", sans-serif',background:"transparent", border:"none"  }}
                                onClick={()=>{ window.location.href = "https://www.instagram.com/sewhoneyswim/?hl=en"}}>
                                Follow Us On Instagram
                            </ButtonContainer>

                    </div>


                {/*<div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-0">*/}
                {/*    <div className="container col">*/}
                {/*        <img className="rounded mx-auto d-block img-fluid " src={img3} alt="aboutpic2" />*/}
                {/*    </div>*/}
                {/*    <div className="container col">*/}
                {/*        <img className="rounded mx-auto d-block img-fluid " src={img2} alt="aboutpic2" />*/}
                {/*    </div>*/}
                {/*    <div className="container col">*/}
                {/*        <img className="rounded mx-auto d-block img-fluid  " src={img3} alt="aboutpic2" />*/}
                {/*    </div>*/}
                {/*    <div className="container col">*/}
                {/*        <img className="rounded mx-auto d-block img-fluid  " src={img2} alt="aboutpic2" />*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<p className="col-10 mx-auto my-2 text-center text-muted">*/}
                {/*    In 2017, sew honey was founded by Gena & Gabbi Miele. What started off as a creative outlet turned*/}
                {/*    Into a small business. We launched sew honey because we wanted to create swimwear that makes girls*/}
                {/*    Feel comfortable & confident!*/}
                {/*</p>*/}
                {/*<p className="col-10 mx-auto my-2 text-center text-muted">*/}
                {/*    Sew Honey is an online boutique that specializes in making handmade swimsuits.*/}
                {/*    We use high quality nylon lycra fabric.*/}
                {/*</p>*/}
                {/*<br/>*/}
                {/*<Row>*/}
                {/*    <Col>*/}
                {/*        <img className="rounded mx-auto d-block img-fluid w-75" src={img2} alt="aboutpic2" />*/}
                {/*    </Col>*/}
                {/*    <Col>*/}
                {/*        <img className="rounded mx-auto d-block img-fluid w-75" src={img3} alt="aboutpic2" />*/}
                {/*    </Col>*/}
                {/*</Row>*/}

                {/*<br/>*/}

            </div>
        );
    }
}

export default About;