import React from 'react'
import Input from './../../UI/input'
import Dropdowninput from './../../UI/dropdowninput'
import css from './employeereg.module.css'
import Button from '../../UI/Button';


function Employeeregistration() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;






    return (
        <div className={`w-2/3 px-8 py-1  ${css.container}`}>
            <h2 style={{ color: 'blue' }}>Employee Registration</h2>
            <div>
                <h3 style={{ color: 'gold' }}>Registration Date:- <span>{formattedDate}</span></h3>
            </div>
            <div>
                <h2 >Employee Information</h2>
                <Input label="Name :-" />
                <Input label="Date of Birth" />
                <Input label="Age" />
                <Dropdowninput label="Gender" list={[
                    { name: 'Male', code: '1' },
                    { name: 'Female', code: '2' },
                    { name: 'Transgender', code: '3' },
                ]} />
            </div>
            <div>
                <h2 style={{ color: ' #ffffff' }}>Employee Address</h2>
                <Input label="Phone Number" />
                <Input label="Email id" />
                <Input label="Country" />
                <Input label="State" />
                <Input label="Address" />
            </div>
            <div>
                <h2>Employee Address</h2>
                <Input label="Name" />
                <Input label="Phone No" />
                <Input label="Email id" />
                <Input label="Address" />
            </div>
            <div>
                <h2>Job Application</h2>
                <Dropdowninput label="Job type" list={[
                    { name: 'Doctor', code: '1' },
                    { name: 'Nurse', code: '2' },
                    { name: 'Security', code: '3' },
                    { name: 'Cleaner', code: '4' },
                    { name: 'pharmachist', code: '5' },
                ]} />
            </div>
            <Button extraclass={css.button}>Sumbit</Button>
            <div style={{ width: '100%', height: '10vw' }}></div>
        </div >
    )
}

export default Employeeregistration;