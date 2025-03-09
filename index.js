const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

const mukutMiddleware = (req, res, next) => {
  console.log(req);
  next();
};

app.use(express.static(path.join(__dirname, "public")));

app.use(mukutMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  // res.send('About!')
  //   res.sendFile(path.join(__dirname, "index.html"));
  //   res.status(500);
  res.json({ mukut: 27 });
});
app.get("/home/:name", (req, res) => {
  res.send("Hello World " + req.params.name);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost : ${port}`);
});
