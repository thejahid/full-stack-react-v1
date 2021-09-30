import express from 'express';

import { listings } from './listings';

const app = express();

const port = 9000;

// bodyparser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.get('/', (_req, res) =>
  res.send('Hello welcome to typescript & mern development!!')
);

// work with listing

// get listing
app.get('/listings', (req, res) => {
  return res.send(listings);
});

// delete listing
app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id;

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1));
    }

    return res.send('failed to delete listing');
  }
});

app.listen(port);

console.log(`[app]: Server srunning at ${port}`);
