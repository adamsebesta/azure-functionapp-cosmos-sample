import {
    getSecretFromVault,
    initCosmos
} from "../helpers";

export default async function (context, req) {
    context.log("JavaScript HTTP trigger function processed a request.");
    const key = getSecretFromVault("cosmos-primary-key");
    const db = await initCosmos(key, 'ToDoList');
    const container = db.container('Items');

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