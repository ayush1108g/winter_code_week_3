const mongoose = require("mongoose");
// const body = {
//     patid: patientIdValue,
//     fname: firstNameValue,
//     mname: middleNameValue,
//     lname: lastNameValue,
//     dob: dateOfBirthValue,
//     age: ageValue,
//     gender: genderValue,
//     phone: phoneValue,
//     email: emailValue,
//     country: countryValue,
//     region: regionValue,
//     address: addressValue
//   }
const patientSchema = new mongoose.Schema({
  patid: {
    type: String,
    required: [true, "Patient ID is required"],
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },

  dob: {
    type: String,
    required: [true, "Date of birth is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    trim: true,
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  region: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
