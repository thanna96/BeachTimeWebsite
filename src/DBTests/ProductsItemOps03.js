const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Products";

const productId = 4;
const title = "Brandi Bottom";

// Update the item, unconditionally,

const params = {
    TableName: table,
    Key: {
        "productId": productId,
        "title": title
    },
    UpdateExpression: "set info.price = :r, info.totalPrice=:p, info.color=:a",
    ExpressionAttributeValues: {
        ":r": 30,
        ":p": 0,
        ":a": ["Black", "White", "Yellow"]
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
