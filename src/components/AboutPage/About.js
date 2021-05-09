import React, {Component} from 'react';
import {ButtonContainer} from "../Styles/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import img from "../../banner.JPG"
class About extends Component {
    render() {
        return (
            <div className="container " >
                <Row className="d-none d-md-block mx-auto w-50" >

                    <Col xs={12}>
                        <div className="col-10 mx-auto m-4 text-center text-title mt-3">
                            <p className="mx-auto  font-bold"
                               style={{fontFamily: '"Montserrat", sans-serif', color: '#1a1b1f', fontSize: '40px'}}>
                                About Sew Honey
                            </p>
                        </div>
                    <div className="mx-auto">
                        {/*<img alt=''  src={img} />*/}
                        <p style={{width: '100%', height:'250px', background:'lightpink'}}>&nbsp;</p>

                        <br/>
                        <p className="my-2" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                Hi there! We are Gena Miele & Gabbi Miele- and we are Sew Honey!
                                This is a place where bathing suit dreams come to life!
                                Sew Honey is an online boutique that specializes in making handmade swimsuits. We use high quality nylon lycra fabric.

                            </p>
                            <p className=" my-2 mb-20" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                Sew Honey was founded in 2018. What started off as a creative outlet turned into a small business. We launched Sew Honey because we have a passion for swimwear. Who doesn’t love a cute, comfortable bathing suit- not to mention made specifically for your body type! Our goal is to make you feel comfortable, confident and sexy in your own skin!
                                At Sew Honey every swimsuit is designed and handmade with love! Nothing makes us happier than seeing all of you wearing our creations!

                            </p>
                        <p className=" my-2 mb-20" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                          - Sew Honey Crew
                        </p>


                            <ButtonContainer
                                className="mx-auto text-wrap my-3"
                                style={{color: 'black',fontFamily:'"Montserrat", sans-serif',background:"transparent", border:"none"  }}
                                onClick={()=>{ window.location.href = "https://www.instagram.com/sewhoneyswim/?hl=en"}}>
                                Follow Us On Instagram
                            </ButtonContainer>
                    </div>
                    </Col>
                </Row>
                <Row className="d-block d-md-none mx-auto w-100" >

                    <Col xs={12}>
                        <div className="col-10 mx-auto m-4 text-center text-title mt-3">
                            <p className="mx-auto  font-bold"
                               style={{fontFamily: '"Montserrat", sans-serif', color: '#1a1b1f', fontSize: '40px'}}>
                                About Sew Honey
                            </p>
                        </div>
                        <div className="mx-auto">
                            {/*<img alt=''  src={img} />*/}
                            <p style={{width: '100%', height:'165px', background:'lightpink'}}>&nbsp;</p>
                            <br/>
                            <p className="my-2" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                Hi there! We are Gena Miele & Gabbi Miele- and we are Sew Honey!
                                This is a place where bathing suit dreams come to life!
                                Sew Honey is an online boutique that specializes in making handmade swimsuits. We use high quality nylon lycra fabric.

                            </p>
                            <p className=" my-2 mb-20" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                Sew Honey was founded in 2018. What started off as a creative outlet turned into a small business. We launched Sew Honey because we have a passion for swimwear. Who doesn’t love a cute, comfortable bathing suit- not to mention made specifically for your body type! Our goal is to make you feel comfortable, confident and sexy in your own skin!
                                At Sew Honey every swimsuit is designed and handmade with love! Nothing makes us happier than seeing all of you wearing our creations!

                            </p>
                            <p className=" my-2 mb-20" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                - Sew Honey Crew
                            </p>


                            <ButtonContainer
                                className="mx-auto text-wrap my-3"
                                style={{color: 'black',fontFamily:'"Montserrat", sans-serif',background:"transparent", border:"none"  }}
                                onClick={()=>{ window.location.href = "https://www.instagram.com/sewhoneyswim/?hl=en"}}>
                                Follow Us On Instagram
                            </ButtonContainer>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;