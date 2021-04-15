const Helpers = require("../helpers");

module.exports = async function (context, req) {

    context.log("JavaScript HTTP trigger function processed a request.");
    const container = await Helpers.initCosmos('ToDoList', 'Items');
    const querySpec = {
        query: "SELECT * from c"
    };
    const {
        resources
    } = await container.items
        .query(querySpec)
        .fetchAll();
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: resources,
    };
};