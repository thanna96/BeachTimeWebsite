import React, {Component} from 'react';
import image1 from '../../IMG_4587.PNG';
import image2 from '../../IMG_4588.JPG';

class SizingPage extends Component {
    render() {
        return (
            <div className="">
                <div className="row col-10 mx-auto col-md-6">
                    <h6 className="text-muted ">Home/</h6><h6>Sizing Charts</h6>
                </div>
                <div className="container">

                <img src={image1} alt="store"
                     className="img-fluid "
                     style={{"width":"100%"}}
                />
                <img src={image2} alt="store"
                     className="img-fluid"
                     style={{"width":"100%"}}
                />
                </div>
            </div>
        );
    }
}

export default SizingPage;