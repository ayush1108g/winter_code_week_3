const express = require("express");
const employeecontroller = require("./../controllers/employeecontroller");

const router = express.Router();

router
    .route("/employee")
    .get(employeecontroller.getallemployee)
    .post(employeecontroller.createEmployee);

router.route("/employee/:id").delete(employeecontroller.deleteemployee);
module.exports = router;
