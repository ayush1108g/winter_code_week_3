import React ,{useRef,useState} from 'react'
import { useNavigate } from "react-router";
import Input from './../../UI/input'
import Dropdowninput from './../../UI/dropdowninput'
import css from './employeereg.module.css'
import Button from '../../UI/Button';


function Employeeregistration() {
    const navigate = useNavigate();
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const name = useRef()
    const dob = useRef()
    const age = useRef()
    const gender = useRef()
    const phoneno = useRef()
    const emailid = useRef()
    const country = useRef()
    const state = useRef()
    const adress = useRef()
    const emergencyname =useRef()
    const emergencyphoneno = useRef()
    const emergencyemailid= useRef()
    const emergencyaddress = useRef()
    const jobapplication = useRef();
    const [data,setdata] = useState([])
    function  sumbithandler(event) {
        event.preventDefault();
        const newdata = [
            {
                name:name.current.value,
                dob:dob.current.value,
                age :age.current.value,
                gender :gender.current.value,
                phoneno:phoneno.current.value,
                emailid:emailid.current.value,
                country: country.current.value,
                state: state.current.value,
                adress: adress.current.value,
                emergencyname: emergencyname.current.value,
                emergencyphoneno:emergencyphoneno.current.value,
                emergencyemailid:emergencyemailid.current.value,
                emergencyaddress:emergencyaddress.current.value,
                jobapplication:jobapplication.current.value

            }
        ]
        
        setdata(newdata);
        
      }
      console.log(data);
    return (
        <form className={`w-2/3 px-8 py-1  ${css.container}`} onSubmit={sumbithandler}>
            <h2 style={{ color: 'blue' }}>Employee Registration</h2>
            <div>
                <h3 style={{ color: 'gold' }}>Registration Date:- <span>{formattedDate}</span></h3>
            </div>
            <div>
                <h2 >Employee Information</h2>
                <Input ref={name} label="Name :-" required="required" />
                <Input ref={dob} type ="date" label="Date of Birth" />
                <Input ref = {age}label="Age" />
                <Dropdowninput ref={gender} label="Gender" list={[
                    { name: 'Male', code: '1' },
                    { name: 'Female', code: '2' },
                    { name: 'Transgender', code: '3' },
                ]} />
            </div>
            <div>
                <h2 style={{ color: ' #ffffff' }}>Employee Address</h2>
                <Input ref={phoneno} label="Phone Number" />
                <Input ref={emailid} label="Email id" />
                <Input ref={country} label="Country" />
                <Input ref={state} label="State" />
                <Input ref={adress} label="Address" />
            </div>
            <div>
                <h2>Emergency Address</h2>
                <Input ref={emergencyname} label="Name" />
                <Input ref={emergencyphoneno} label="Phone No" />
                <Input  ref={emergencyemailid} label="Email id" />
                <Input ref={emergencyaddress} label="Address" />
            </div>
            <div>
                <h2>Job Application</h2>
                <Dropdowninput ref={jobapplication} label="Job type" list={[
                    { name: 'Doctor', code: '1' },
                    { name: 'Nurse', code: '2' },
                    { name: 'Security', code: '3' },
                    { name: 'Cleaner', code: '4' },
                    { name: 'pharmachist', code: '5' },
                ]} />
            </div>
            <Button extraclass={css.button} onClick={() => { navigate('/employeeRegistration') }}>Sumbit</Button>
            <div style={{ width: '100%', height: '10vw' }}></div>
        </form>
    )
}

export default Employeeregistration;