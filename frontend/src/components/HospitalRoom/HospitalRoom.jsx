import { useState, useEffect, useRef } from "react";
import "./HospitalRoom.css";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToLink } from "../../App";

export default function H() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [patid, setpatid] = useState("");
  const [fname, setfname] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setlname] = useState("");
  const [dob, setdob] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");

  const nameInputRef = useRef();
  const phonenoInputRef = useRef();
  const signInputRef = useRef();



  console.log(id);
  useEffect(() => {
    const getPatient = async () => {
      try {
        const response = await axios.get(`${ToLink}/patient/${id}`);
        // console.log(response.data.data.nPatient);
        const patient = response.data.data.nPatient;
        const name = patient.name.split(" ");
        setfname(name[0]);
        name.length > 2 ? setmname(name[1]) : setmname("");
        name.length >= 1 ? setlname(name[2]) : setlname(name[1]);
        setpatid(patient.patid);
        setdob(patient.dob);
        setage(patient.age);
        setaddress(patient.address + ', ' + patient.region + ', ' + patient.country);
        setgender(patient.gender);

      } catch (err) {
        console.log(err);
      }
    }
    getPatient();
  }, [id]);

  const SubmitDetailHandler = async (event) => {
    event.preventDefault();
    const newdata = {
      id: id,
      name: nameInputRef.current.value,
      phone: phonenoInputRef.current.value,
      sign: signInputRef.current.value,
    }
    try {
      const response = await axios.post(`${ToLink}/hostel`, newdata);
      console.log(response.data);
      nameInputRef.current.value = "";
      phonenoInputRef.current.value = "";
      signInputRef.current.value = "";
      navigate('/hospitalRoomStatus');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="mainHospital">
      <h1>Hospital Room</h1>
      <div id="Hospital">
        <form action="">
          <span className="hospitalForm1">
            <h3>Payment Information</h3>
            <label for="pid">Patient ID:</label>
            <input type="number" id="pid" name="pid" value={patid} required disabled />
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="fname" value={fname} required disabled />
            <label for="mname">Middle Name:</label>
            <input type="text" id="mname" name="mname" value={mname} disabled />
            <label for="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" value={lname} required disabled />
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={dob} required disabled />

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required value={age} disabled />

            <label for="gender">Gender:</label>
            <select id="gender" name="gender" value={gender} disabled required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label for="address">Address:</label>
            <textarea type="textarea" id="address" name="address" value={address} disabled required />
          </span>
        </form>
        <form action="">
          <span className="hospitalForm2">
            <h3>Emergency Information</h3>
            <label for="name">Name:</label>
            <input type="text" id="fname" name="name" ref={nameInputRef} required />
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" ref={phonenoInputRef} required />
            <label htmlFor="">Signature:</label>
            <input type="text" id="signature" name="signature" ref={signInputRef} required />
          </span>
        </form>
      </div>
      <span id="buttonHos">
        <button id="ButtonHos1" onClick={SubmitDetailHandler} > Submit</button>
        <button onClick={() => { navigate(-1) }}> Cancel</button>
      </span>
    </div>
  );
}
