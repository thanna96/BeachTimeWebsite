import React, {Component} from 'react';
import image1 from '../../IMG_4587.PNG';
import image2 from '../../IMG_4588.JPG';

class SizingPage extends Component {
    render() {
        return (
            <div className="w-75 mx-auto">
                <div className="col-12 mx-auto m-5 text-center text-title mt-3">
                    <p className="mx-auto   font-bold" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'40px'}}>
                        Sizing
                    </p>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={image1} alt="store"
                             className="img-fluid mx-auto "
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={image2} alt="store"
                             className="img-fluid mx-auto"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default SizingPage;