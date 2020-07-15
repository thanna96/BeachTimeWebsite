import React, {Component} from 'react';
import CarouselWrapper from "../Styles/CarouselWrapper";
import MobileCarousel from "../Styles/MobileCarousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="carousel-desktop">
                    <CarouselWrapper/>
                </div>
                <div className="carousel-mobile">
                    <MobileCarousel/>
                    <Card className="text-center text-muted" border="white">
                        <Card.Body>
                            <Card.Text>
                                Check out the newest hand made swimsuits from our Sew Honey Summer 2020 Collection
                            </Card.Text>
                            <Button variant="outline-dark">Browse Collection</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        );
    }
}

export default Home;