const express = require("express");
require("dotenv").config();
const app = express();

app.use("/api", require("./routes.js"));

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
