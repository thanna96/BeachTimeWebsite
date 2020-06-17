import React, {Component} from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1 className="display-3">404</h1>
                        <h1>Error</h1>
                        <h2>Page Not Found</h2>
                        <h2>
                            The URL
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span>
                            Was Not Found
                        </h2>
                    </div>
                </div>

            </div>
        );
    }
}

export default Default;