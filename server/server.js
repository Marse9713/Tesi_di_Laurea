import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import connection from "./db/pool.js";

const app = express();

var corsOptions = { origin: "http://localhost:5500" };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json);