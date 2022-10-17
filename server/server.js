import express from 'express';
var app = express();

app.get('/', function(req, res){

    res.status(200).sed("Hello World");

});

app.listen(PORT, function(){

    console.log("Server is running on port:", PORT);

});