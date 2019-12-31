import "dotenv/config";
import "./db/connection"
import * as express from "express";
import { crawling } from "./crawling";
import { extract } from "./extract";

const app = express();

app.get('/', async (req, res) => {
  const result = await crawling();
  res.send(extract(result));
})

app.post('/', async (req, res) => {
 
})

// app.get('/', (req, res) => {
//   crawling().then((result) => res.send(result));
// })

app.listen(3000, () => {
  console.log('start');
});