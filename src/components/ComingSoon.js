import React, {Component} from 'react';
import Image from './Coming-Soon.JPG'

class ComingSoon extends Component {
    render() {
        return (
            <div className=" mx-5 ">
                <img className="mx-auto d-block img-fluid h-auto" src={Image} alt="aboutpic2" />
            </div>
        );
    }
}

export default ComingSoon;