import classes from "./Navbar.module.css";
import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (params) => {
  const navigate = useNavigate();

  return (<>
    <div className={classes.navbar}>
      <div className="dropdown" >
        <button className="btn"
          type="button" id="dropdownMenuButton" data-toggle="dropdown" >
          <div className="h2 d-flex" style={{ flexDirection: 'row' }}> <span ><GiHamburgerMenu /></span><span>&nbsp;&nbsp;Menu</span></div>
        </button>
        <div className="dropdown-menu bg-light" aria-labelledby="dropdownMenuButton">
          <li onClick={() => { navigate('/') }} className="dropdown-item" >Welcome</li>
          <li className="dropdown-item" onClick={() => { navigate('/patientRegistration') }}> Patient Registration</li>
          <li className="dropdown-item" onClick={() => { navigate('/employeeRegistration') }}>  Employee Registration</li>
          <li className="dropdown-item" onClick={() => { navigate('/employeeList') }}>  Employee List </li>
          <li className="dropdown-item" > ADD PROJECT</li>
          <li className="dropdown-item" > ADD PROJECT</li>
        </div>
      </div>
    </div >
  </>
  );
};
export default Navbar;
