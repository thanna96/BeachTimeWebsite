import React, {Component} from 'react';
import CarouselWrapper from "../Styles/CarouselWrapper";
import MobileCarousel from "../Styles/MobileCarousel";


class Home extends Component {
    render() {
        return (
            <div>
                <div className="carousel-desktop">
                    <CarouselWrapper/>
                </div>
                <div className="carousel-mobile">
                    <MobileCarousel/>
                </div>

            </div>
        );
    }
}

export default Home;