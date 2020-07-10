import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Mimg from "../../mBanner1.JPG"
import Mimg2 from "../../mBanner2.JPG"
import Mimg3 from "../../mBanner3.JPG"
import { Slide } from 'react-slideshow-image';

const slideImages = [
    Mimg,
    Mimg2,
    Mimg3
];
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,

}

class CarouselWrapper extends Component {

    render() {
        return (
            <div className="container-fluid ">
                <div className="slide-container">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}


export default CarouselWrapper;