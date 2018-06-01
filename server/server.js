const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shop_reviews"
});

connection.connect();

app.use("/1", (req, res) => {
  connection.query("SELECT shop_id FROM products WHERE id = 1", (err, results) => {
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
