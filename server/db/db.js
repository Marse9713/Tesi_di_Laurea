import { createPool } from "mysql";
import { HOST, USER, PASSWORD, DB } from "./dbconfig/dbconfig.js";

const pool = createPool({

    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DB

});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

export default pool;