import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from "../../banner.JPG"
import img2 from "../../banner2.JPG"
import img3 from "../../banner3.JPG"

const slideImages = [
    img,
    img2,
    img3
];

class CarouselWrapper extends Component {

    render() {
        return (
<Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
    <div key="content-3" className="my-slide content">
        <img src={slideImages[0]} alt=""/>
    </div>
    <div key="content-3" className="my-slide content">
        <img src={slideImages[1]} alt=""/>
    </div>
    <div key="content-3" className="my-slide content">
        <img src={slideImages[2]} alt=""/>
    </div>
</Carousel>

        );
    }
}


export default CarouselWrapper;