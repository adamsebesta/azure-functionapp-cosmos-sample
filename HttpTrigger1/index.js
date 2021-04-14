import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from ("@azure/keyvault-secrets");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const credential = new DefaultAzureCredential();
  const client = new SecretClient(
    `https://aasha-proto.documents.azure.com/`,
    credential
    );
    console.log(client)

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: client,
  };
};
