import { MongoClient } from "mongodb";

const user = "developerjahid";
const userPassword = "SC5pSUi9EWxYc7yT";
const cluster = "developerjahid.nwlf4";
const databaseName = "full_stack_react_v1";
const collectionName = "test_listings";

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

export const connectDatabse = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(`${databaseName}`);

  return {
    listings: db.collection(`${collectionName}`),
  };
};
