import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";
import logo2 from "../../sewhoneylogo.png";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer
                className="page-footer mt-10 font-small cyan w-full darken-3 py-4 pin-b border-grey bg-yellow-200 sm:bg-white">

                <div className="container">
                    <div className="d-block d-md-none text-center">
                        <Link to='/' className="nav-link">
                            <img src={logo2} alt="store"
                                 className="img-fluid h-20 mx-auto"
                            />
                        </Link>
                    </div>
                    <div className="d-block d-md-none pb-6 px-12">
                        <div className="row w-full mx-auto">
                            <a href='/' className="w-50">Home</a>
                            <a href='/about' className="w-50 text-right">About</a>
                        </div>
                        <div className="row w-full mx-auto ">
                            <a href='/customer-care' className="w-50">Customer Care</a>
                            <a href='/sizing-page' className="w-50 text-right">Sizing</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center ">
                            <div className="mb-3 ">
                                <a href="https://www.facebook.com/SewHoneySwim/?ref=nf&hc_ref=ARRAKOHS3x_-iRPO7-T_EwK5Ln04aL5J7gutQECf17b0uDp46kloMDbSlLUuTvfXlYk"
                                   className="fb-ic">
                                    <MDBIcon icon="facebook" size="lg" className="text-black-50 mr-md-5 mr-3"/>
                                </a>
                                <a href="https://www.instagram.com/sewhoneyswim/?hl=en" className="ins-ic">
                                    <MDBIcon icon="instagram" size="lg" className="text-black-50 mr-md-0 mr-3"/>
                                </a>
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