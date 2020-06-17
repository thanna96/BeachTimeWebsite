import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from "../../banner.JPG"
import img2 from "../../banner2.JPG"
import img3 from "../../banner3.JPG"
import { Slide } from 'react-slideshow-image';

const slideImages = [
    img,
    img2,
    img3
];
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
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