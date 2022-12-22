import express from "express";
import cors from 'cors';
import {HOST, USER, PASSWORD, DB} from './dbconfig/dbconfig.js';
import { createConnection } from 'mysql';

var pool = mysql.createPool({

    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DB

});

pool.getConnection(function(err, connection) {

    connection.release();
})