const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shop_reviews"
});

connection.connect();

app.use(express.json());

app.use("/:id", express.static(__dirname + "/../public"));

app.get("/:id/reviews", (req, res) => {
  let productId = req.params.id;
  connection.query(`SELECT reviews.id, users.username, users.img_url AS user_img, products.product, products.img_url AS product_img, reviews.shop_id, reviews.date_submitted, reviews.rating, reviews.review, reviews.votes, reviews.helpfulness 
  FROM reviews INNER JOIN products INNER JOIN users 
  ON reviews.user_id = users.id AND reviews.product_id = products.id 
  AND reviews.shop_id = (SELECT shop_id FROM products WHERE id = ${productId})`, (err, results) => {
    err
    ? res.status(500).end()
    : res.status(200).json(results);
  });
});

app.post("/:id/reviews", (req, res) => {
  let productId = req.params.id;
  connection.query(`INSERT INTO users (username, img_url) 
  VALUES ("${req.body.username}", "https://s3-us-west-1.amazonaws.com/front-end-capstone-images/default.png")`)
  .on("error", err => {
    res.status(500).json(err);
  })
  .on("result", results => {
    let userId = results.insertId;
    connection.query(`INSERT INTO reviews (user_id, product_id, date_submitted, rating, review, votes, helpfulness, shop_id)
    VALUES (${userId}, ${productId}, "${req.body.dateSubmitted}", ${req.body.rating}, "${req.body.review}", 0, 0, ${req.body.shopId})`, (err, results) => {
      err
      ? res.status(500).json(err)
      : res.status(201).json(results);
    });
  });
});

app.put("/:id/reviews", (req, res) => {
  connection.query(`UPDATE reviews SET votes = ${req.body.votes}, helpfulness = ${req.body.helpfulness}
  WHERE id = ${req.body.id}`, (err, results) => {
    err
    ? res.status(500).json(err)
    : res.status(204).end();
  });
});

app.listen(3001, () => console.log("Express server listening on port 3001"));
