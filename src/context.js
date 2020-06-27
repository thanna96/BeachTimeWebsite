import React, {Component} from 'react';
import {detailProduct} from './data';

const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});
const docClient = new AWS.DynamoDB.DocumentClient();


const ProductContext = React.createContext();
// Provider
// Consumer
// Used for passing methods
// Contains Data from data that we can manipulate

class ProductProvider extends Component {
    state ={
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen:false,
        modalProduct: detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = ()=>{
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

            console.log("gfdgdffg",scanResults)
            this.setState(()=>{
                return{products:scanResults.sort((a,b)=> a.id > b.id ? 1 : -1)}
            })
        };
        scanTable();


        // let tempProducts = [];
        // storeProducts.forEach(item => {
        //     const singleItem = {...item};
        //     tempProducts = [...tempProducts, singleItem];
        // })
        // this.setState(()=>{
        //     return{products:tempProducts}
        // })
    }

    getItem = id =>{
        return this.state.products.find(item => item.id === id);
    }

    handleDetail = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product};
        });
    }

    increment = (id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.info.count = product.info.count + 1;
        product.info.total = product.info.price * product.info.count;

        this.setState( () => {
            return {cart:[...tempCart]}
        }, () => {
            this.addTotals();
        })
    };

    decrement = (id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.info.count = product.info.count - 1;

        if(product.info.count === 0){
            this.removeItem(id);
        }
        else {
            product.info.total = product.info.price * product.info.count;

            this.setState(() => {
                return {cart: [...tempCart]}
            }, () => {
                this.addTotals();
            })
        }
    };

    removeItem = (id)=>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.info.inCart = false;
        removedProduct.info.count = 0;
        removedProduct.info.total = 0;

        this.setState(() =>{
            return {
                cart: [...tempCart],
                products:[...tempProducts]
            }
        }, () =>this.addTotals())
    };

    clearCart = (id)=>{
        this.setState(()=>{
            return {
                cart:[]
            }
        }, () =>{
            this.setProducts();
            this.addTotals();
        })
    };

    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.info.total));
        const tempTax = subTotal * 0.06625;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }

    addToCart = (id) =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.info.inCart = true;
        product.info.count = 1;
        const price = product.info.price;
        product.info.total = price;
        this.setState( () =>{
            return { products: tempProducts,cart:[...this.state.cart,product]};
        },()=>this.addTotals());
    };

    openModal = id =>{
        const product = this.getItem(id);
        this.setState( () =>{
            return {modalProduct:product,modalOpen:true}
        })
    }

    closeModal = () =>{
        this.setState( ()=>{
            return {modalOpen:false}
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
