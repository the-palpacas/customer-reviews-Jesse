const express = require("express");
const path = require("path");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shop_reviews"
});

connection.connect();

app.use((req, res) => {
  let url = req.url.split(path.sep);
  connection.query(`SELECT shop_id FROM products WHERE id = ${parseInt(url[1])}`, (err, results) => {
    let shop = results[0].shop_id;
    connection.query(`SELECT * FROM reviews WHERE shop_id = ${shop}`, (err, results) => {
      err
      ? res.status(500)
      : res.json(results);
    });
  });
});

app.listen(3001);
console.log("Express server listening on port 3001");
