const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("My first express done....Yay");
});

app.listen(3000, () => console.log("listening on port 3000"));
