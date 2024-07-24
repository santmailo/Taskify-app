require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToMongoDB = require("./database");
const Todo = require("./todoSchema");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const port = process.env.PORT || 3000;
const router = require("./routes");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api", router);

//connect to MongoDB
connectToMongoDB();

app.listen(port, () => {
  console.log(`port is listening on http:localhost:${port}`);
});
