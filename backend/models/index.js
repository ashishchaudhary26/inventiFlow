const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/inventiflow";

function connectdb() {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}
module.exports = { connectdb };
