import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToLink } from '../App';
import { useNavigate } from 'react-router';

const EmployeeList = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    // const Dummydata = [
    //     {EmployeeID: '123', Name:"something",Age:"12",Gender:"male",Phoneno:'765432',emailid:'123@gfds',address:'ffvdscd',jobtype:'doctor'},
    //     {EmployeeID: '1234', Name:"somethi",Age:"14",Gender:"male",Phoneno:'7652',emailid:'12dv3@gfds',address:'ffvdcdscd',jobtype:'doctor'}
    // ]
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ToLink}/patient`);
                setdata(response.data.data.allPatient)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const deleteemployee = async (idToDelete) => {
        try {
            // console.log(idToDelete);
            const response = await axios.delete(`${ToLink}/patient/${idToDelete}`);
            console.log('Deleted:', response.data);
            // window.location.reload();
            navigate('/patientList');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className='h2 d-flex justify-content-center'>Patient List</div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email id</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((e) => (
                            <tr key={e._id}>
                                <td>{e.patid}</td>
                                <td>{e.name}</td>
                                <td>{e.dob}</td>
                                <td>{e.age}</td>
                                <td>{e.gender}</td>
                                <td>{e.phone}</td>
                                <td>{e.email}</td>
                                <td>{e.address + ' ' + e.region + ' ' + e.country}</td>

                                <td>
                                    <button onClick={() => deleteemployee(e._id)} type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}


export default EmployeeList