import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";

class TopBar extends Component {
    render() {
        return (
                <div className="" style={{"background":"grey"}}>
                    <ul className="inline-list toolbar__menu">
                        <li>
                            <a href="/pages/shipping">Shipping</a>
                        </li>

                        <li>
                            <a href="/pages/returns">Returns</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/gena.miele?__tn__=%2Cd*F*F-R&eid=ARAqBZJDAajsw3D9FrKgzblPIUFF24OSpRqlSa6d2tY2-RhQq0-JwVGQliNFu0PpMsm8CTubiR2P48XX&tn-str=*F" className="fb-ic">
                                <MDBIcon icon="facebook" size="2x" className="text-black-50 mr-md-5 mr-3" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/gena_miele" className="tw-ic">
                                <MDBIcon icon="twitter" size="2x" className="text-black-50 mr-md-5 mr-3" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/sewhoneyswim/?hl=en" className="ins-ic">
                                <MDBIcon icon="instagram" size="2x" className="text-black-50 mr-md-0 mr-3" />
                            </a>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default TopBar;