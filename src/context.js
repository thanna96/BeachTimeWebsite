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
        colors: [],
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
        //localStorage.removeItem("cart")
        this.setProducts()
        this.setColors()
    }

    setColors = ()=>{
        const scanTable = async () => {
            const params = {
                TableName: "Colors",
                ProjectionExpression: "color",
            };

            let scanResults = [];
            let items;
            do{
                items =  await docClient.scan(params).promise();
                items.Items.forEach((item) => scanResults.push(item));
                params.ExclusiveStartKey  = items.LastEvaluatedKey;
            }while(typeof items.LastEvaluatedKey != "undefined");

            //console.log("Scan Results:",scanResults)
            this.setState(()=>{
                return{colors:scanResults}
            })
        };
        scanTable();
    }

    getCart = () =>{
        let localCart = localStorage.getItem("cart");
        localCart = JSON.parse(localCart)
        if (localCart) {
            localCart.forEach(product => {
                //this.getItem(product.id,product.title).info.count = product.info.count
                //this.getItem(product.id,product.title).info.selColor = product.info.selColor
                //this.getItem(product.id,product.title).info.selSize = product.info.selSize
                this.addToCart(product)
            })
        }
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

           //console.log("Scan Results:",scanResults)
            this.setState(()=>{
                return{products:scanResults.sort((a,b)=> a.id > b.id ? 1 : -1)}
            })
            this.getCart()
        };
        scanTable();
    }

    getItem = (id,title) =>{
        return this.state.products.find(item => item.id === id && item.title === title);
    }

    handleDetail = (id,title) =>{
        const product = this.getItem(id,title);
        this.setState(()=>{
            return {detailProduct:product};
        });
    }

    increment = (product)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === product.id && item.title === product.title && item.info.selColor === product.info.selColor && item.info.selSize === product.info.selSize );
        //const index = tempCart.indexOf(item);
        //const product = tempCart[index];
        if( product.info.count < 10) {
            selectedProduct.info.count = selectedProduct.info.count + 1;
            selectedProduct.info.total = selectedProduct.info.price * selectedProduct.info.count;

            this.setState(() => {
                return {cart: [...tempCart]}
            }, () => {
                this.addTotals();
            })
        }
    };

    decrement = (id,title,color,size) =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id && item.title === title && item.info.selColor === color && item.info.selSize === size );
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.info.count = product.info.count - 1;

        if(product.info.count === 0){
            this.removeItem(id,title,color,size);
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

    removeItem = (id,title,color,size) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.find(item => item.id === id && item.title === title && item.info.selColor === color && item.info.selSize === size );

        const index = tempProducts.indexOf(this.getItem(id,title));
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

    clearCart = () =>{
        this.setState(()=>{
            return {
                cart:[]
            }
        }, () =>{
            this.setProducts();
            this.addTotals();
        })
        localStorage.removeItem("cart")
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
        let cartCopy = [...this.state.cart];
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart);
    }

    addToCart = (prod) =>{
        let product = JSON.parse(JSON.stringify(prod))
        let tempCart = [...this.state.cart];
        if(tempCart.find(item => item.id === prod.id
            && item.title === prod.title
            && item.info.selColor === prod.info.selColor
            && item.info.selSize === prod.info.selSize )){
            // console.log(prod)
           this.increment(product)

            return;
        }

        //let tempProducts = [...this.state.products];
        //const index = tempProducts.indexOf(this.getItem(id,title));
        //const product = this.getItem(id,title);// tempProducts[index];
        product.info.inCart = true;
        if (product.info.count === 0) product.info.count = 1;
        product.info.total = product.info.price * product.info.count;
        this.setState( () =>{
            return {  cart:[...this.state.cart,product]};
        },()=>this.addTotals());
    };

    openModal = (id,title) =>{
        const product = this.getItem(id,title);
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
                clearCart: this.clearCart,
                getItem: this.getItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
