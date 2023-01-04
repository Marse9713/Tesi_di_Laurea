const express = require('express');
const app = express();
const cors = require('cors');

const connection = require('./db/pool.js')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }))

//post

app.post("/insert", (request, response) => {


});

//get

app.get("/getAll", (request, response) => {

    const db = DBService.getDbServiceInstance();
    const result = db.getAllData()

});


//put


//delete