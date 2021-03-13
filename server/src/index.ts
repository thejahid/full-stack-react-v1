import express from "express";

import { listings } from "./listings";

const app = express();
const port = 4000;

app.get("/", (_req, res) => res.send("Hello World! This is express server!!"));

//get listings
app.get("/listings", (_req, res) => {
  return res.send(listings);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
