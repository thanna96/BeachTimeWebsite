import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from "../banner.JPG"
import img2 from "../banner2.JPG"
import img3 from "../banner3.JPG"
import PropTypes from "prop-types";

class CarouselWrapper extends Component {
    render() {
        return (
            <Carousel infiniteLoop  autoPlay>
                <div>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                </div>
                <div>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />
                </div>
                <div>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </div>
            </Carousel>
        );
    }
}


export default CarouselWrapper;