import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small cyan darken-3">
                <hr style={{"background":"#e6be8a"}}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center ">
                            <div className="mb-3 ">
                                <a href="https://www.facebook.com/SewHoneySwim/?ref=nf&hc_ref=ARRAKOHS3x_-iRPO7-T_EwK5Ln04aL5J7gutQECf17b0uDp46kloMDbSlLUuTvfXlYk" className="fb-ic">
                                    <MDBIcon icon="facebook" size="2x" className="text-black-50 mr-md-5 mr-3" />
                                </a>
                                <a href="https://twitter.com/gena_miele" className="tw-ic">
                                    <MDBIcon icon="twitter" size="2x" className="text-black-50 mr-md-5 mr-3" />
                                </a>
                                <a href="https://www.instagram.com/sewhoneyswim/?hl=en" className="ins-ic">
                                    <MDBIcon icon="instagram" size="2x" className="text-black-50 mr-md-0 mr-3" />                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center ">© 2020 Sew Honey Swim
                    </div>
                </div>

            </footer>
        );
    }
}


export default Footer;