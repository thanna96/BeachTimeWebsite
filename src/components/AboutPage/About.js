import React, {Component} from 'react';
import {ButtonContainer} from "../Styles/Button";
class About extends Component {
    render() {
        return (
            <div className="container" >
                    <div className="mx-auto">
                            <p className="my-2" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                Hi there! We are Gena Miele & Gabbi Miele- and we are Sew Honey!
                                This is a place where bathing suit dreams come to life!
                                Sew Honey is an online boutique that specializes in making handmade swimsuits. We use high quality nylon lycra fabric.

                            </p>
                            <p className=" my-2 mb-20" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'16px',opacity:'60%'}} >
                                Sew Honey was founded in 2018. What started off as a creative outlet turned into a small business. We launched Sew Honey because we have a passion for swimwear. Who doesn’t love a cute, comfortable bathing suit- not to mention made specifically for your body type! Our goal is to make you feel comfortable, confident and sexy in your own skin!
                                At Sew Honey every swimsuit is designed and handmade with love! Nothing makes us happier than seeing all of you wearing our creations!

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