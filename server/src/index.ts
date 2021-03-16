import express from "express";
import { ApolloServer } from "apollo-server-express";

import { typeDefs, resolvers } from "./graphql";

const app = express();
const port = 4000;

//apollo server
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/api" });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
