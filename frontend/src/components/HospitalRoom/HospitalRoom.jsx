import "./HospitalRoom.css";
export default function () {
  return (
    <div id="mainHospital">
      <h1>Hospital Room</h1>
      <div id="Hospital">
        <form action="">
          <span className="hospitalForm1">
            <h3>Payment Information</h3>
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

            <label for="gender">Gender:</label>
            <select id="gender" name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label for="address">Address:</label>
            <textarea type="textarea" id="address" name="address" required />
          </span>
        </form>
        <form action="">
          <span className="hospitalForm2">
            <h3>Emergency Information</h3>
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="fname" required />
            <label for="lname">Middle Name:</label>
            <input type="text" id="lname" name="lname" required />
            <label for="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" />
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
            <label htmlFor="">Signature:</label>
            <input type="text" id="signature" name="signature"/>
          </span>
        </form>
      </div>
      <span id="buttonHos">
      <button id="ButtonHos1"> Submit</button>
      <button> Cancel</button>
      </span>
    </div>
  );
}
