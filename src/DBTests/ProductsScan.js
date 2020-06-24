import React from "react";

const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    accessKeyId: "foo",
    secretAccessKey: "bar",
    endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: "Products",
    ProjectionExpression: "productId, title, info",
};

console.log("Scanning Products table.");
docClient.scan(params, onScan);

const storeProducts =[];

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("Scan succeeded.");
        data.Items.forEach(function(product) {
            storeProducts.push(product)
            console.log(
                product.productId + ": ",
                product.title, "- :", product.info);
        });

        // continue scanning if we have more movies, because
        // scan can retrieve a maximum of 1MB of data
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }
        console.log("products:  ", storeProducts);
    }
}

export const scanTable = async (tableName) => {
    const params = {
        TableName: tableName,
    };

    let scanResults = [];
    let items;
    do{
        items =  await docClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey  = items.LastEvaluatedKey;
    }while(typeof items.LastEvaluatedKey != "undefined");

    return scanResults;
};
