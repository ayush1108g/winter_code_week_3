import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToLink } from '../App';
import { useNavigate } from 'react-router';
import Papa from 'papaparse';

const EmployeeList = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const [datax, setdatax] = useState([]);
    // const Dummydata = [
    //     {EmployeeID: '123', Name:"something",Age:"12",Gender:"male",Phoneno:'765432',emailid:'123@gfds',address:'ffvdscd',jobtype:'doctor'},
    //     {EmployeeID: '1234', Name:"somethi",Age:"14",Gender:"male",Phoneno:'7652',emailid:'12dv3@gfds',address:'ffvdcdscd',jobtype:'doctor'}
    // ]
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ToLink}/hostel`);
                setdata(response.data.data.allHostel);
                console.log(response.data.data.allHostel);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchData2 = async () => {
            try {
                const response = await axios.get(`${ToLink}/hostel/history`);
                setdatax(response.data.data.allHostel);
                console.log(response.data.data.allHostel);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
        fetchData2();
    }, []);

    const changestat = async (id) => {
        const body = {
            id: id,
        }
        try {
            const resp = await axios.patch(`${ToLink}/hostel`, body);
            console.log(resp);
            navigate("/hospitalRoomStatus");
            alert("Status Changed");
        } catch (error) {
            console.log(error);
        }
    }
    const convertToCSV = (jsonData) => {
        const csvContent = Papa.unparse(jsonData);
        return csvContent;
    };
    const downloadCSV = (jsonData) => {
        const csvContent = convertToCSV(jsonData);
        console.log(csvContent);
        const blob = new Blob([csvContent], { type: 'text/csv' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'HospitalRoom.csv';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };

    return (
        <div>
            <div className='h2 d-flex justify-content-center'>Hospital Room Status</div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Sr no.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        <td style={{ background: 'none' }}></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e, idx) => (
                            <tr key={e._id}>
                                <td>{idx + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.phone}</td>
                                <td>{new Date(e.date).toLocaleDateString('en-GB')}</td>
                                <td>ACTIVE</td>
                                <td>
                                    <button onClick={() => changestat(e._id)} type="button" className="btn btn-danger">Change Status</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={() => downloadCSV(data)} type="button" className="btn btn-danger" >Download CSV</button>
            <div style={{ width: '100%', height: '15vh' }}></div>
            <div className='h2 d-flex justify-content-center'> Previous Records</div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Sr no.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <td style={{ background: 'none' }}></td>
                    </tr>
                </thead>
                <tbody>

                    {
                        datax.map((e, idx) => (
                            <tr key={e._id}>
                                <td>{idx + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.phone}</td>
                                <td>{new Date(e.date).toLocaleDateString('en-GB')}</td>
                                <td>NOT ACTIVE</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={() => downloadCSV(datax)} type="button" className="btn btn-danger" >Download CSV</button>
        </div>
    );
}


export default EmployeeList