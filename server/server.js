import express from "express";
import cors from 'cors';

const app = express();
app.use(cors({ origin:"http://localhost:5500"}));

require("./routes/routes.js")(app);

app.listen(5000); //listen on 5000