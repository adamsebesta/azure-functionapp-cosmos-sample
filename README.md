<h1>azure-functionapp-cosmos-sample</h1>

<h3>Sample app showing how to conect an Azure Function App to a Cosmos DB.</h3>

Firstly, by using a Managed System Identity the Function App securely fetches your encrypted Cosmos connection key from your Key Vault. 
Next, using this key and the distinct Cosmos endpoint the azure-sdk-js will return a Cosmos Instance which allows you to interact with your Database.
For this sample in particular, I have shown accessing a database named "ToDoList", and its container named "Items".

Bonus: Function is app is linked to deployment slot using CI through github actions
<br></br>
Thank you for reading!


