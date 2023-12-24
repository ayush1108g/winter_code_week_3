const mongoose = require('mongoose');
// name: name.current.value,
//                 dob: dob.current.value,
//                 age: age.current.value,
//                 gender: gender.current.value,
//                 phoneno: phoneno.current.value,
//                 emailid: emailid.current.value,
//                 country: country.current.value,
//                 state: state.current.value,
//                 adress: adress.current.value,
//                 emergencyname: emergencyname.current.value,
//                 emergencyphoneno: emergencyphoneno.current.value,
//                 emergencyemailid: emergencyemailid.current.value,
//                 emergencyaddress: emergencyaddress.current.value,
//                 jobapplication: jobapplication.current.value
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        trim: true
    },
    dob: {
        type: String,
        required: [true, 'DOB is required'],
    },
    age: {
        type: Number,
        required: [true, 'DOB is required'],
    },
    gender: {
        type: String,
        trim: true,
        required: [true, 'Gender is required'],
    },
    phoneno: {
        type: Number,
        required: true,
    },
    emailid: {
        type: String,
        required: [true, 'email id']
    },
    country: {
        type: String,
        required: [true, 'country is required']
    },

    state: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    emergencyname: {
        type: String,
        required: true
    },
    emergencyphoneno: {
        type: String,
        required: true
    },
    emergencyemailid: {
        type: String,
        required: true
    },
    emergencyaddress: {
        type: String,
        required: true
    },
    jobapplication: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
