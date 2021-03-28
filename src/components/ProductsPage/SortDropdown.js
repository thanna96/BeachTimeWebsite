import React, {Component} from 'react';
import Col from "react-bootstrap/Col";

class SortDropdown extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-10 mx-auto m-4 text-center text-title mt-3">
                    <p className="mx-auto  font-bold" style={{fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f', fontSize:'40px'}}>
                        Shop
                    </p>
                </div>

                <Col xs={12} md={6} className="mb-4 p-2 " style={{float: 'left' }} >
                    <p className="d-none d-md-block"
                       style={{letterSpacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'BLACK', fontSize:'15px',opacity: "60%"}}>
                        Womens {this.state.typeChoice}
                    </p>
                    <p className="text-center d-block d-md-none"
                       style={{letterSpacing:'1px',fontFamily:'"Montserrat", sans-serif', color:'BLACK', fontSize:'15px',opacity: "60%"}}>
                        Womens {this.state.typeChoice}
                    </p>
                </Col>

                <Col xs={12} md={3} className="mb-4" style={{float: 'right'}} >
                    <div className=" border   p-2 shadow-md" style={{background:"#f8f8f8" }}>
                        <Col>
                            <h5 className="text-uppercase text-muted"  style={{"width":"100%",fontFamily:'"Montserrat", sans-serif', color:'#1a1b1f'}}>
                                <select id="sortList" defaultValue="new" className="text-muted" onChange={this.sortList}  style={{"width":"100%"}}>
                                    <option value="new" disabled>Sort</option>
                                    <option value="new">Newest</option>
                                    <option value="priceLH">Price: (Low to High)</option>
                                    <option value="priceHL">Price: (High to Low)</option>
                                    <option value="AZ">Name: A-Z</option>
                                    <option value="ZA">Name: Z-A</option>
                                </select>
                            </h5>
                        </Col>
                    </div>
                </Col>
            </React.Fragment>
        );
    }
}

export default SortDropdown;