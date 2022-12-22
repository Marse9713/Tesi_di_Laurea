import createConnection from "mysql"

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

export default connection;