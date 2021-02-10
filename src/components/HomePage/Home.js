import React, {Component} from 'react';
import CarouselWrapper from "../Styles/CarouselWrapper";
import MobileCarousel from "../Styles/MobileCarousel";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="  w-100 mx-auto">
                    <CarouselWrapper/>
                </div>
                {/*<div className="carousel-mobile my-auto">*/}
                {/*    <div className="col-10 mx-auto  text-center text-title m-3">*/}
                {/*        <h1 className="text-capitalize text-muted font-semibold text-3xl subpixel-antialiased">*/}
                {/*            Shop Now*/}
                {/*        </h1>*/}
                {/*    </div>*/}
                {/*    <MobileCarousel/>*/}

                {/*</div>*/}

            </div>
        );
    }
}

export default Home;