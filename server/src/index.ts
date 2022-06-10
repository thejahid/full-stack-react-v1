import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs, resolvers } from './graphql';

const app = express();

const port = 8000;

async function startApolloServer() {
  // apollo server
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: '/api' });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}!!`);
  });
}

startApolloServer();

// app.get('/', (_req, res) =>
//   res.send('Hello welcome to typescript & mern development!!')
// );

// // work with listing

// // get listing
// app.get('/listings', (req, res) => {
//   return res.send(listings);
// });

// // delete listing
// app.post('/delete-listing', (req, res) => {
//   const id: string = req.body.id;

//   for (let i = 0; i < listings.length; i++) {
//     if (listings[i].id === id) {
//       return res.send(listings.splice(i, 1));
//     }

//     return res.send('failed to delete listing');
//   }
// });
