const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shop_reviews"
});

connection.connect();

app.listen(3001);
console.log("Express server listening on port 3001");
