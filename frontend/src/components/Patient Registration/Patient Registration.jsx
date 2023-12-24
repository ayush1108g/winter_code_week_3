import axios from "axios";
import "./Patient Registration.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { ToLink } from "../../App";
export default function Patient() {
  const navigate = useNavigate();
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
  // const [data, setData] = useState({});
  async function handleSave() {

    const patientIdValue = patientId.current.value;
    const firstNameValue = firstName.current.value;
    const middleNameValue = middleName.current.value;
    const lastNameValue = lastName.current.value;
    const dateOfBirthValue = dateOfBirth.current.value;
    const ageValue = age.current.value;
    const genderValue = gender.current.value;
    const phoneValue = phone.current.value;
    const emailValue = email.current.value;
    const countryValue = country.current.value;
    const regionValue = region.current.value;
    const addressValue = address.current.value;
    const body = {
      patid: patientIdValue,
      name: firstNameValue + " " + (middleNameValue ? middleNameValue + " " : '') + lastNameValue,
      dob: dateOfBirthValue,
      age: ageValue,
      gender: genderValue,
      phone: phoneValue,
      email: emailValue,
      country: countryValue,
      region: regionValue,
      address: addressValue
    }
    try {
      const resp = await axios.post(`${ToLink}/patient`, body);
      console.log(resp.data);
      navigate('/patientList');
    } catch (err) {
      console.log(err);
    }
  }

  const resetHndler = () => {
    navigate('/patientRegistration')
  }


  return (
    <div className="patient">
      <form action="#" method="post">
        <h2>Patient Registration</h2>
        <div className="patientForm">
          <span className="patientForm1">
            <label for="pid">*Patient ID:</label>
            <input type="number" id="pid" name="pid" ref={patientId} required />
            <label for="fname">*First Name:</label>
            <input type="text" id="fname" name="fname" ref={firstName} required />
            <label for="lname">Middle Name:</label>
            <input type="text" id="mname" name="mname" ref={middleName} />
            <label for="lname">*Last Name:</label>
            <input type="text" id="lname" name="lname" ref={lastName} required />

            <label for="dob">*Date of Birth:</label>
            <input type="date" id="dob" name="dob" ref={dateOfBirth} required />

            <label for="age">*Age:</label>
            <input type="number" id="age" name="age" ref={age} required />
          </span>

          <span className="patientForm2">
            <label for="gender">*Gender:</label>
            <select id="gender" name="gender" ref={gender} required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label for="phone">*Phone:</label>
            <input type="tel" id="phone" name="phone" ref={phone} required />
            <label for="email">*Email:</label>
            <input type="email" id="email" name="email" ref={email} required />
            <label for="address">*Country:</label>
            <input type="text" id="country" name="country" ref={country} required />
            <label for="address">*Region:</label>
            <input type="text" id="Region" name="Region" ref={region} required />
            <label for="address">*Address:</label>
            <textarea type="textarea" id="address" name="address" ref={address} required />
          </span>
        </div>
      </form>
      <span id="button">
        <button className={` px-4 py-2 text-xs mt-5 md:text-base rounded-md bg-blue-500 text-gray-100 hover:bg-blue-700 hover:text-gray-200`} type="submit" onClick={handleSave}>Submit</button>
        <button className={` px-4 py-2 text-xs mt-5 md:text-base rounded-md bg-blue-500 text-gray-100 hover:bg-blue-700 hover:text-gray-200`} type="submit" onClick={resetHndler}>Reset</button>
      </span>
    </div>
  );
}