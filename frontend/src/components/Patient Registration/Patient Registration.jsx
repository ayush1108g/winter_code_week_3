import "./Patient Registration.css";
import { useState,useRef } from "react";
export default function () {
  const patientId = useRef();
  const firstName = useRef();
  const middleName = useRef();
  const lastName = useRef();
  const dateOfBirth = useRef();
  const age = useRef();
  const gender = useRef();
  const phone = useRef();
  const email = useRef();
  const country = useRef();
  const region = useRef();
  const address = useRef();
  const [data, setData] = useState({});
  function handleSave(){
    const patientIdValue = patientId.current.value;
    const firstNameValue = firstName.current.value;
    const middleNameValue = middleName.current.value;
    const lastNameValue = lastName.current.value;
    const dateOfBirthValue = dateOfBirth.current.value;
    const ageValue = age.current.value;
    const genderValue=gender.current.value;
    const phoneValue = phone.current.value;
    const emailValue = email.current.value;
    const countryValue = country.current.value;
    const regionValue = region.current.value;
    const addressValue = address.current.value;
    console.log(middleName);
  }
  return (
    <div className="patient">
      <form action="#" method="post">
        <h2>Patient Registration</h2>
        <div className="patientForm">
          <span className="patientForm1">
            <label for="pid">Patient ID:</label>
            <input type="number" id="pid" name="pid" required />
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="fname" required />
            <label for="lname">Middle Name:</label>
            <input type="text" id="lname" name="lname" required />
            <label for="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" />

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required />

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required />
          </span>

          <span className="patientForm2">
            <label for="gender">Gender:</label>
            <select id="gender" name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label for="address">Country:</label>
            <input type="text" id="country" name="country" required />
            <label for="address">Region:</label>
            <input type="text" id="Region" name="Region" required />
            <label for="address">Address:</label>
            <textarea type="textarea" id="address" name="address" required />
          </span>
        </div>
        <span id="button">
        <button type="submit" onClick={handleSave}>Submit</button>
        <button type="submit">Reset</button>
        </span>
      </form>
    </div>
  );
}
