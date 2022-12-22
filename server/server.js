import express from "express";
import cors from 'cors';
import {HOST, USER, PASSWORD, DB} from './dbconfig/dbconfig.js';
import { createConnection } from 'mysql';

const app = express();

var corsOptions = { origin: "http://localhost:5500" };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json("Server is working. All ok");
});

// set port, listen for requests
const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

var con = createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB
});

var connection = con.connect(function(err) {

  if (err) throw err;
  console.log("Connected!");

});