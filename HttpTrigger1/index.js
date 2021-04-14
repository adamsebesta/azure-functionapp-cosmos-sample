const Helpers = require("../helpers");

module.exports = async function (context, req) {
    context.log("JavaScript HTTP trigger function processed a request.");
    const key = Helpers.getSecretFromVault("cosmos-primary-key");
    const db = await Helpers.initCosmos(key, 'ToDoList');
    const container = db.container('Items');
    // console.log(container.items)
    const querySpec = {
        query: "SELECT * from c"
    };
    try {
        const items = await container.items
            .query(querySpec)
            .fetchAll();
    } catch (e) {
        console.log(e)
    }
    console.log(items)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: items,
    };
};