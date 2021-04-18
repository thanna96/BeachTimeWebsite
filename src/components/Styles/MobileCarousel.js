import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Mimg from "../../mBanner1.JPG"
import Mimg2 from "../../mBanner2.JPG"
import Mimg3 from "../../mBanner3.JPG"
import Mimg4 from "../../mBanner4.JPG"
import { Slide } from 'react-slideshow-image';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const slideImages = [
    Mimg,
    Mimg2,
    Mimg3,
    Mimg4
];
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: false,
    pauseOnHover: true,
    indicators: true,
}

class CarouselWrapper extends Component {

    render() {
        return (
            <div className="container-fluid ">
                <div className="slide-container">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                                <span>
                                  <Link to='/product-list/handmade' className="nav-link">
                                     <Button variant="outline-dark" >
                                        Shop Now
                                    </Button>
                                  </Link>
                             </span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                             <span>
                                  <Link to='/product-list/handmade' className="nav-link">
                                     <Button variant="outline-light" >
                                        Shop Now
                                    </Button>
                                  </Link>
                             </span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            <span>
                                  <Link to='/product-list/handmade' className="nav-link">
                                     <Button variant="outline-light" >
                                        Shop Now
                                    </Button>
                                  </Link>
                             </span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                                <span>
                                  <Link to='/product-list/handmade' className="nav-link">
                                     <Button variant="outline-light" >
                                        Shop Now
                                    </Button>
                                  </Link>
                             </span>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}


export default CarouselWrapper;