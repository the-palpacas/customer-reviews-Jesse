const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shop_reviews"
});

connection.connect();

app.get("/:id/reviews", (req, res) => {
  const productId = req.params.id;
  connection.query(`SELECT reviews.id, users.username, users.img_url, products.product, products.img_url, reviews.date_submitted, reviews.rating, reviews.review, reviews.votes, reviews.helpfulness 
  FROM reviews INNER JOIN products INNER JOIN users 
  ON reviews.user_id = users.id AND reviews.product_id = products.id 
  AND reviews.shop_id = (SELECT shop_id FROM products WHERE id = ${productId})`, (err, results) => {
    err
    ? res.status(500).end()
    : res.status(200).json(results);
  });
});

app.listen(3001, () => console.log("Express server listening on port 3001"));
