import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import emailjs from "emailjs-com";

export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment,this.props.value.cart);
            const products = this.props.value.cart.map((item)=>{
                return {
                    itemName: item.title,
                    count: item.info.count,
                    size: item.info.selSize,
                    color: item.info.selColor,
                    secondaryColor: item.info.secColor,
                    stringColor: item.info.stringColor
                }
            });
            const htmlItems = '<div>'+
                products.map((item)=>{
                    return ('<div style="border: 1px solid black"><p>item:'+item.itemName+'</p><p>count:'+item.count+
                        '</p><p>size:'+item.size+'</p><p>color:'+item.color+'</p><p>second color:'
                        +item.secondaryColor+'</p> <p>string color:'+item.stringColor+'</p> </div>')
                })
                +'</div>'
            const variables = {
                city: payment.address.city,
                country_code: payment.address.country_code,
                line1: payment.address.line1,
                postal_code: payment.address.postal_code,
                recipient_name: payment.address.recipient_name,
                state: payment.address.state,
                email: payment.email,
                items: htmlItems,
                total: this.props.total
            }

            emailjs.send(
                'gmail',
                'template_rzk8CvIY',
                variables,
                process.env.REACT_APP_EMAILJS_KEY
            ).then(res => {
                console.log('Email successfully sent!')
            })
                .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
            this.props.clearCart();
            this.props.history.push('/');
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox: process.env.REACT_APP_APP_ID,
            production: process.env.REACT_APP_APP_ID_PRODUCTION
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={this.props.total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel} />
        );
    }
}