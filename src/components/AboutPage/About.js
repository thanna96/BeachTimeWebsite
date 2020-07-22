import React, {Component} from 'react';
import img from "../../banner.JPG"
import img2 from "../../aboutPicture2.JPG"
import img3 from "../../aboutPicture.JPG"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
class About extends Component {
    render() {
        return (
            <div className="container">
                {/*<div className="row col-10 mx-auto col-md-6 ">*/}
                {/*    <h6 className="text-muted ">Home/</h6><h6>About</h6>*/}
                {/*</div>*/}
                <br/>
                <h3 className="text-center text-title text-muted aboutTitle">MEET THE SISTERS BEHIND THE LABEL</h3>
                    <img className="rounded mx-auto d-block img-fluid" src={img} alt="aboutpic" />
                <br/>

                <p className="col-10 mx-auto my-2 text-center text-muted">
                    In 2017, sew honey was founded by Gena & Gabbi Miele. What started off as a creative outlet turned
                    Into a small business. We launched sew honey because we wanted to create swimwear that makes girls
                    Feel comfortable & confident!
                </p>
                <br/>
                <Row>
                    <Col>
                        <img className="rounded mx-auto d-block img-fluid" src={img2} alt="aboutpic2" />
                    </Col>
                    <Col>
                        <img className="rounded mx-auto d-block img-fluid" src={img3} alt="aboutpic2" />
                    </Col>
                </Row>

                <br/>
                <p className="col-10 mx-auto my-2 text-center text-muted">
                    Sew Honey is an online boutique that specializes in making handmade swimsuits.
                    We use high quality nylon lycra fabric.
                </p>

            </div>
        );
    }
}

export default About;