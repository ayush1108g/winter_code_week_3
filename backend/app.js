const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const employeeroute = require('./routes/Employeeroute')
const patientroute = require('./routes/patientroute')
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use('/', employeeroute);
app.use('/',patientroute)
module.exports = app;
