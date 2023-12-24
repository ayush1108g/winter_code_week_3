const express = require("express");
const patientcontroller = require("./../controllers/patientcontroller");

const router = express.Router();

router
  .route("/patient")
  .get(patientcontroller.getallPatients)
  .post(patientcontroller.createPatient);

router
  .route("/patient/:id")
  .get(patientcontroller.getbyid)
  .delete(patientcontroller.deletePatient);
module.exports = router;
