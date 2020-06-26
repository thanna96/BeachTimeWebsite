import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {ProductsSize} from "../../context";

const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    accessKeyId: "foo",
    secretAccessKey: "bar",
    endpoint: "http://localhost:8000"
});
const docClient = new AWS.DynamoDB.DocumentClient();

class AdminPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            title: '',
            price: null,
            img: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.getProductCount();
    }

    getProductCount = () => {
        const scanTable = async () => {
            const params = {
                TableName: "Products",
                ProjectionExpression: "id, title, info",
            };

            let scanResults = [];
            let items;
            do{
                items =  await docClient.scan(params).promise();
                items.Items.forEach((item) => scanResults.push(item));
                params.ExclusiveStartKey  = items.LastEvaluatedKey;
            }while(typeof items.LastEvaluatedKey != "undefined");

            this.setState({
                id:scanResults.length + 1
            })
        };
        scanTable()
    }

    addProduct = (id,title,price,imgName,description) =>{
        const params = {
            TableName: "Products",
            Item: {
                "id": id,
                "title": title,
                "info": {
                    "img": "img/"+imgName,
                    "price": price,
                    "sizes": {
                        "X-Small": 1,
                        "Small": 1,
                        "Medium": 1,
                        "Large": 1,
                        "X-Large": 1
                    },
                    "color": [
                        "Black",
                        "White",
                        "Yellow"
                    ],
                    "company": "SHS",
                    "description": description,
                    "inCart": false,
                    "count": 0,
                    "total": 0
                }
            }
        };
        docClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Added item:", JSON.stringify(data, null, 2));
            }
        });
    }

    handleChange(Event){
        let nam = Event.target.name;
        let val = Event.target.value;
        this.setState({
            ...this.state,
            [nam]: val
        })
    }

    handleFile(Event){
        this.setState({
            ...this.state,
            img: Event.target.files[0].name
        })
    }

    handleSubmit(Event) {
        console.log(
            "id",this.state.id,
            "title",this.state.title,
            "price",this.state.price,
            "img",this.state.img,
            "desc",this.state.description);
        this.addProduct(
            this.state.id,
            this.state.title,
            this.state.price,
            this.state.img,
            this.state.description);
        Event.preventDefault();
    }
    render() {

        return (

            <div className="row col-10 mx-auto col-md-6 ">
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group>
                        <Form.File multiple id="exampleFormControlFile1" label="Picture:" onChange={this.handleFile} />
                    </Form.Group>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Label>Product Name:</Form.Label>
                            <Form.Control name='title' onChange={this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Label>Price:</Form.Label>
                            <Form.Control name='price' type="number" onChange={this.handleChange}/>
                        </Col>
                    </Row>
                    <br/>
                    <Form.Label>Product Description:</Form.Label>
                    <Form.Control name='description' type="text" as="textarea" rows="3" onChange={this.handleChange}/>
                    <br/>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Select Sizes (ctrl+click)</Form.Label>
                        <Form.Control as="select" multiple>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </Form.Control>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Select Colors (ctrl+click)</Form.Label>
                        <Form.Control as="select" multiple>
                            <option>White</option>
                            <option>Red</option>
                            <option>Black</option>
                            <option>Yellow</option>
                            <option>Blue</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AdminPage;