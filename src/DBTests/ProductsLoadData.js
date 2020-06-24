const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing products into DynamoDB. Please wait.");

const allMovies = JSON.parse(fs.readFileSync('src/DBTests/ProductData.json', 'utf8'));
allMovies.forEach(function(product) {
    const params = {
        TableName: "Products",
        Item: {
            "productId": product.productId,
            "title": product.title,
            "info": product.info
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add Product", product.title, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", product.title);
        }
    });
});