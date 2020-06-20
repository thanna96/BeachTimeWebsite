import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small cyan darken-3">
                <hr style={{"background":"#FFFF00"}}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center ">
                            <div className="mb-3 ">
                                <a href="https://www.facebook.com/gena.miele?__tn__=%2Cd*F*F-R&eid=ARAqBZJDAajsw3D9FrKgzblPIUFF24OSpRqlSa6d2tY2-RhQq0-JwVGQliNFu0PpMsm8CTubiR2P48XX&tn-str=*F" className="fb-ic">
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