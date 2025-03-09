const express = require("express");
const path = require("path");
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  // res.send('About!')
  //   res.sendFile(path.join(__dirname, "index.html"));
  //   res.status(500);
  res.json({ mukut: 27 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost : ${port}`);
});
