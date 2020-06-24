import React, {Component} from 'react';
import storeProducts from "./ProductsScan.js";

class TestDb extends Component {
    render() {
        return (
            <div>
                <p> {JSON.stringify(storeProducts)}</p>
            </div>
        );
    }
}

export default TestDb;