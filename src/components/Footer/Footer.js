import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small cyan darken-3">
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center ">
                            <div className="mb-3 ">
                                <a href="https://thomashanna.me/" className="fb-ic">
                                    <MDBIcon icon="facebook" size="2x" className="text-black-50 mr-md-5 mr-3" />
                                </a>
                                <a href="https://thomashanna.me/" className="tw-ic">
                                    <MDBIcon icon="twitter" size="2x" className="text-black-50 mr-md-5 mr-3" />
                                </a>
                                <a href="https://thomashanna.me/" className="ins-ic">
                                    <MDBIcon icon="instagram" size="2x" className="text-black-50 mr-md-0 mr-3" />                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center ">© 2020 Copyright:
                        <a href="https://thomashanna.me/"> TomHanna.com</a>
                    </div>
                </div>

            </footer>
        );
    }
}


export default Footer;