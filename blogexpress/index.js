const exphbs = require("express-handlebars");
const express = require("express");
const path = require("path");
const port = 3001;

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
