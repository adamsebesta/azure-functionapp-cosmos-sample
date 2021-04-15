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
    const url = process.env["KEYVAULT_URI"]
    const client = new SecretClient(url, credential);
    return await client.getSecret(name);
  },
  async initCosmos(dbName, contName, context) {
    // get runtime varaible (dev) or db key from helper (prod)  
    let key = process.env['COSMOS_DB_KEY'] || await this.getSecretFromVault("cosmos-primary-key");
    context.log(key)
    const endpoint = process.env["COSMOS_URI"]
    context.log(endpoint)
    // init client
    // const cosmosClient = new CosmosClient({
    //   endpoint,
    //   key,
    // });
    // // get db / create if doesnt exist
    // const
    //   db = await cosmosClient.databases.createIfNotExists({
    //     id: dbName
    //   });
    // const container = db.database.container(contName);
    // return container;
  }
}

module.exports = helpersObject;