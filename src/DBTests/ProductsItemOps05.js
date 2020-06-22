const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "Products";

const productId = 4;
const title = "Brandi Bottom";

// Conditional update (will fail)

const params = {
    TableName: table,
    Key: {
        "productId": productId,
        "title": title
    },
    UpdateExpression: "remove info.color[0]",
    ConditionExpression: "size(info.color) > :num",
    ExpressionAttributeValues: {
        ":num": 2
    },
    ReturnValues: "UPDATED_NEW"
};

console.log("Attempting a conditional update...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});