const express = require("express");
const path = require("path");
const app = express();
const Puerto = 3030;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.listen(Puerto, () => {
  console.log("server listo en " + Puerto);
  console.log("http://localhost:" + Puerto);
});
