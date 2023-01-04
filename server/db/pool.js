const mysql = require("mysql");
var { HOST, USER, PASSWORD, DB, DB_PORT} = require("../dbconfig/dbconfig.js");
let instance = null;


  let con = mysql.createConnection({

    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DB,
    port: DB_PORT

  });

  con.connect(function(err) {

    if (err) throw err;
    console.log("db " + con.state);

  });

  class DBService{

    static getDBServ(){

      return instance ? instance: new DBService()

    }

    async getAllData(){

      try {

        const response = await new Promise((resolve, reject) => {

          const query = "SELECT * FROM articolo";

          con.query(query, (err, result) => {

            if (err) 
              reject (new Error(err.message));
              resolve(result);

          });
          
        });

        console.log(response);

      } catch (error) {

        console.log(error);

      }

    }

  };

module.exports = {
  
  DBService

};