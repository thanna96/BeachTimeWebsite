import React, {Component} from 'react';
import Title from "../Header/Title";
import img from "../../aboutpicture.JPG"

class About extends Component {
    render() {
        return (
            <div>
                <Title name="About" title="Sew Honey"/>
                <img className="mx-auto my-2 center " src={img} alt="aboutpic" />
                <br/>
                <h4 className="col-10 mx-auto my-2 text-center text-title">MEET THE SISTER BEHIND THE LABEL</h4>
                <p className="col-10 mx-auto my-2 text-center">
                    Sew Honey is an online boutique that specializes in making handmade swimsuits.
                    We use high quality nylon lycra fabric.
                </p>
                <p className="col-10 mx-auto my-2 text-center">
                    In 2017, sew honey was founded by Gena & Gabbi Miele. What started off as a creative outlet turned
                    Into a small business. We launched sew honey because we wanted to create swimwear that makes girls
                    Feel comfortable & confident!
                </p>
            </div>
        );
    }
}

export default About;