import React, {Component} from 'react';

class StorePolicy extends Component {
    render() {
        return (
            <div>
                <div className="row col-10 mx-auto col-md-6 ">
                    <h6 className="text-muted ">Home/</h6><h6>Policy</h6>
                </div>
                <br/>
                <h3>Return Policy</h3>
                <br/>
                <p className="row col-10 mx-auto col-md-6 container-fluid text-center">
                Unfortunately, sew honey does not accept returns as we work
                on a made to order service. Returns will only be accepted if
                you have received a damaged item. However, all returns must be
                made within 10 days of receiving the product. Sew Honey will not
                accept returns for any other reason. including
                "it doesn't fit." You are responsible for providing us with
                the correct size based on our size chart. Any questions regarding
                sizing or any other matter can be sent to sewhoney3@gmail.com.
                we appreciate your business.
                </p>
            </div>
        );
    }
}

export default StorePolicy;