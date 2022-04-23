const express = require("express");
const http = require("http");
require("dotenv").config();

const app = express();

app.use("/", express.static(__dirname + "/../dist"));

const server = http.createServer(app);

const port = process.env.PORT;
server.listen(port, () => console.log(`server listening on port ${port}`));
