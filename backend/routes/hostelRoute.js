const express = require("express");
const hostelcontroller = require("./../controllers/hostelcontroller");

const router = express.Router();

router
  .route("/hostel")
  .get(hostelcontroller.getallHostel)
  .patch(hostelcontroller.changeStatus)
  .post(hostelcontroller.createHostel);

router.route("/hostel/history").get(hostelcontroller.getallHostelHistory);
module.exports = router;
