const {
  DefaultAzureCredential
} = require("@azure/identity");
const {
  SecretClient
} = require("@azure/keyvault-secrets");
const {
  CosmosClient
} = require("@azure/cosmos");

const helpersObject = {
  async getSecretFromVault(name) {
    const credential = new DefaultAzureCredential();
    const url = process.env["KEYVAULT_URI"] || "<keyvault-url>";
    const client = new SecretClient(url, credential);
    return await client.getSecret(name);
  },
  async initCosmos(key, db) {
    const endpoint = process.env["COSMOS_URI"] || "<COSMOS_URI>";
    const cosmosClient = new CosmosClient({
      endpoint,
      key,
    });
    return await cosmosClient.database(db);

  }

}

module.exports = helpersObject;