const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const vegitable = {
  product: "Potato",
  price: 200,
};
app.get("/", (req, res) => {
  res.send(vegitable);
});

app.get("/fruit/banana", (req, res) => {
  res.send({
    fruit: "Banana",
    quantity: 1000,
    price: 10000,
  });
});

const users = ["anis", "arif", "sajib", "asif", "hosniara", "sime"];
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

//post

app.post("/adduser", (req, res) => {
  const user = req.body;
  user.id = 55;
  res.send(user);
});

app.listen(3000, () => console.log("listening on port 3000"));
