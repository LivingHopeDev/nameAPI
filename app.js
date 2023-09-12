const mongoose = require("mongoose");
const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
require("dotenv").config();
const bodyParser = require("body-parser");
const Route = require("./Routes/route");

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const app = express();
app.use(mongoSanitize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", Route);

app.listen(process.env.PORT, () => {
  console.log(`Backend server is running on port ${process.env.PORT}`);
});
