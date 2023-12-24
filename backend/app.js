const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const employeeroute = require("./routes/Employeeroute");
const patientroute = require("./routes/patientroute");
const hostelRoute = require("./routes/hostelRoute");
const usersignuprouter = require("./routes/signuproute");
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use("/user", usersignuprouter);
app.use("/", employeeroute);
app.use("/", patientroute);
app.use("/", hostelRoute);

module.exports = app;
