import React, {Component} from 'react';
import CarouselWrapper from "../Styles/CarouselWrapper";
import MobileCarousel from "../Styles/MobileCarousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="carousel-desktop w-75 mx-auto">
                    <CarouselWrapper/>
                </div>
                <div className="carousel-mobile">
                    <MobileCarousel/>
                    <Card className="text-center text-muted" border="white">
                        <Card.Body>
                            <Card.Text>
                                Check out the newest hand made swimsuits from our Sew Honey Summer 2020 Collection
                            </Card.Text>
                            <Link to='/Shop'>
                            <Button variant="outline-dark">Browse Collection</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        );
    }
}

export default Home;