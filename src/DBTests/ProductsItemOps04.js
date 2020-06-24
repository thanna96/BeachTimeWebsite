const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Products";

const productId = 4;
const title = "Brandi Bottom";

// Increment an atomic counter

const params = {
    TableName: table,
    Key: {
        "productId": productId,
        "title": title
    },
    UpdateExpression: "set info.img = :val",
    ExpressionAttributeValues: {
        ":val": "img/default3.jpg"
    },
    ReturnValues: "UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});