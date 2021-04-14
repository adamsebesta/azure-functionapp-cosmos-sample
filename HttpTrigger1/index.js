const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const credential = new DefaultAzureCredential();
  const url = process.env["KEYVAULT_URI"] || "<keyvault-url>";
  const client = new SecretClient(url, credential);

  const secretName = "cosmos-primary-key";

  const secret = await client.getSecret(secretName);
  console.log("secret: ", secret);

  //   const endpoint = "https://aasha-proto.documents.azure.com/";
  //   const key = getResult;
  //   const client = new CosmosClient({
  //     endpoint,
  //     key,
  //   });

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: secret,
  };
};
