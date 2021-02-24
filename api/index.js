const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/api", (req, res) => {
  try {
    let exists = Math.floor(Math.random() * 100) % 2 == 0 ? "está" : "não está";
    let api = {
      vaiCorinthians: exists,
    };
    res.status(200).send(api);
  } catch (err) {
    res.status(500).send({
      error: "Something went wrong",
    });
  }
});

app.use(express.static(path.join(__dirname, "/")));
module.exports = app;

app.listen(4242, () => {
  console.log("Estou funcionando");
});
