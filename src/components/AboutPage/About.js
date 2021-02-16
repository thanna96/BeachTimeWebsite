import React, {Component} from 'react';
import {ButtonContainer} from "../Styles/Button";
class About extends Component {
    render() {
        return (
            <div className="container" >
                    <div className="mx-auto">
                            <p className="my-2" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                In 2017, sew honey was founded by Gena & Gabbi Miele. What started off as a creative outlet turned
                                Into a small business. We launched sew honey because we wanted to create swimwear that makes girls
                                Feel comfortable & confident!
                            </p>
                            <p className=" my-2 mb-20" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                Sew Honey is an online boutique that specializes in making handmade swimsuits.
                                We use high quality nylon lycra fabric.
                            </p>
                            <ButtonContainer
                                className="mx-auto text-wrap my-3 "
                                style={{fontFamily:'"Montserrat", sans-serif',background:"transparent", border:"none"  }}
                                onClick={()=>{ window.location.href = "https://www.instagram.com/sewhoneyswim/?hl=en"}}>
                                Follow Us On Instagram
                            </ButtonContainer>
                    </div>
            </div>
        );
    }
}

export default About;