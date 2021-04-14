const {
    DefaultAzureCredential
} = require("@azure/identity");
const {
    SecretClient
} = require("@azure/keyvault-secrets");
const {
    CosmosClient
} = require("@azure/cosmos");

module.exports = async function (context, req) {
    context.log("JavaScript HTTP trigger function processed a request.");

    const credential = new DefaultAzureCredential();
    const url = process.env["KEYVAULT_URI"] || "<keyvault-url>";
    const client = new SecretClient(url, credential);

    const secretName = "cosmos-primary-key";

    const secret = await client.getSecret(secretName);
    console.log("secret: ", secret);

    const endpoint = "https://aasha-proto.documents.azure.com/";
    const key = secret.value;
    const client = new CosmosClient({
        endpoint,
        key,
    });

    const database = client.database('ToDoList');
    const container = database.container('Items');

    const querySpec = {
        query: "SELECT * from c"
    };

    const items = await container.items
        .query(querySpec)
        .fetchAll();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: items,
    };
};