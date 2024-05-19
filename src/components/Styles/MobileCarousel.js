import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Slide } from 'react-slideshow-image';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
    indicators: true,
    fade:true
}

class CarouselWrapper extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="slide-container">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{ background:'lightsteelblue'}}>
                            {/*<div className={"w-full"}>*/}
                            {/*    <p style={{ height:'500px', background:'lightsteelblue'}}>&nbsp;</p>*/}
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
                            <div style={{background:'lightseagreen'}}>
                                {/*<p style={{height:'500px', background:'lightseagreen'}}>&nbsp;</p>*/}
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
                            <div style={{background:'brown'}}>
                                {/*<p style={{height:'500px', background:'brown'}}>&nbsp;</p>*/}
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
                            <div style={{background:'cyan'}}>
                                {/*<p style={{height:'500px', background:'cyan'}}>&nbsp;</p>*/}
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