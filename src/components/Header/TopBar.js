import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";

class TopBar extends Component {
    render() {
        return (
                <div className="container-fluid d-none d-lg-block mx-auto" style={{"background":"#eeeeee"}}>
                    <ul className="mx-auto" id="menu" style={{"textAlign": "center"}}>
                        <li>
                            <a href="https://www.facebook.com/SewHoneySwim/?ref=nf&hc_ref=ARRAKOHS3x_-iRPO7-T_EwK5Ln04aL5J7gutQECf17b0uDp46kloMDbSlLUuTvfXlYk" className="fb-ic">
                                <MDBIcon icon="facebook" size="1x" className="text-black-50 mr-md-5 mr-3 " />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/gena_miele" className="tw-ic">
                                <MDBIcon icon="twitter" size="1x" className="text-black-50 mr-md-5 mr-3 " />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/sewhoneyswim/?hl=en" className="ins-ic">
                                <MDBIcon icon="instagram" size="1x" className="text-black-50 mr-md-5 mr-3 " />
                            </a>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default TopBar;