const express = require("express");
const { connectdb } = require("./models/index");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

connectdb();

app.listen(PORT, () => {
  console.log("app running on the port 5000");
});
