import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";

import { connectDatabse } from "./database";
import { typeDefs, resolvers } from "./graphql";

const port = 5000;

const mount = async (app: Application) => {
  //connect database
  const db = await connectDatabse();

  //apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });
  server.applyMiddleware({ app, path: "/api" });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

  const listings = await db.listings.find({}).toArray();

  console.log(listings);
};

mount(express());
