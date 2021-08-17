const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const axios = require("axios");
const app = express();

//here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/client/build")));
app.get("/api/", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    res.send(response.data);
  });
});

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

const port = process.env.PORT || 8081;
app.listen(port);
console.log(`app is listening on port: ${port}`);
