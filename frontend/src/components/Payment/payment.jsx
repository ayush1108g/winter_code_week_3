import "./payment.css";
export default function Payment() {
  return (
    <div>
      <h1>Payment</h1>
      <form action="">
        <span className="payForm1">
          <h3>Employee Information</h3>
          <label for="pid">Employee ID:</label>
          <input type="number" id="pid" name="pid" required />
          <label for="fname">First Name:</label>
          <input type="text" id="fname" name="fname" required />
          <label for="lname">Middle Name:</label>
          <input type="text" id="lname" name="lname" required />
          <label for="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" />

          <label for="age">Age:</label>
          <input type="number" id="age" name="age" required />

          <label for="gender">Gender:</label>
          <select id="gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label for="jobType">Job Type:</label>
          <select id="jobType" name="jobType" required>
            <option value="Doctor">Doctor</option>
            <option value="Nurse">Nurse</option>
            <option value="other">Other</option>
          </select>
          <label for="payment">Payment (in )</label>
          <input type="number" id="payment" name="payment" required />
        </span>
      </form>
      <form action="">
        <span>
          <h3>Payment Information</h3>
          <label htmlFor="">Attendance</label>
          <input type="number" />
          <label htmlFor="">Deduction</label>
          <input type="number" />
          <label htmlFor="">OverTime</label>
          <input type="number" />
          <label htmlFor="">OverTime Payment</label>
          <input type="number" />
          <label htmlFor="">Sub Total</label>
          <input type="number" />
          <label htmlFor="">Tax</label>
          <input type="number" />
          <label htmlFor="">Total</label>
          <input type="number" />
          <button> Total</button>
        </span>
      </form>
    </div>
  );
}
