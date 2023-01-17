require("dotenv").config();
const bodyParser = require('body-parser')
console.log("Hola " + process.env.PORT);
const express = require("express");
const app = express();
const { dbConnection } = require("./config/db");

// middlewares
app.use(bodyParser.json())

app.listen(process.env.PORT, () => {
  console.log(
    `\x1b[32m ******************************************************* \x1b[0m`
  );
  console.log(
    `\x1b[32m **  Se levanta mi API en el puerto ${process.env.PORT}  ** \x1b[0m`
  );
  console.log(
    `\x1b[32m ******************************************************* \x1b[0m`
  );
});

// Conectado a la BD
dbConnection();

// localhost:5000
// localhost:5000/
app.get("/", (req, res) => {
  console.log("Estoy en home");
  res.send("Hola estan en mi API");
});

// localhost:5000/books
app.use("/books", require("./routers/books.routes"));
