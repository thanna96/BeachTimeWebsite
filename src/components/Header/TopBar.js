import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";

class TopBar extends Component {
    render() {
        return (
                <div className=" d-none d-md-block w-100 position-absolute" style={{background:"#fffaf0", zIndex:2, height:"25px"}}>
                    <ul className="" id="menu" style={{"textAlign": "left"}}>
                        <li className="text-muted">
                           Follow Us:
                        </li>
                        <li>
                            <a href="https://www.facebook.com/SewHoneySwim/?ref=nf&hc_ref=ARRAKOHS3x_-iRPO7-T_EwK5Ln04aL5J7gutQECf17b0uDp46kloMDbSlLUuTvfXlYk" className="fb-ic">
                                <MDBIcon icon="facebook" size="1x" className="text-black-50 ml-3 mr-3 " />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/sewhoneyswim/?hl=en" className="ins-ic">
                                <MDBIcon icon="instagram" size="1x" className="text-black-50 " />
                            </a>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default TopBar;