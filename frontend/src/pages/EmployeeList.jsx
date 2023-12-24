import React,{useEffect, useState} from 'react'
import axios from 'axios';
const EmployeeList = () => {
    const [data,setdata] = useState([]);
    // const Dummydata = [
    //     {EmployeeID: '123', Name:"something",Age:"12",Gender:"male",Phoneno:'765432',emailid:'123@gfds',address:'ffvdscd',jobtype:'doctor'},
    //     {EmployeeID: '1234', Name:"somethi",Age:"14",Gender:"male",Phoneno:'7652',emailid:'12dv3@gfds',address:'ffvdcdscd',jobtype:'doctor'}
    // ]
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/employee");  
                
                setdata(response.data.data.allEmployee)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },[data]);
    const deleteemployee = async (idToDelete) => {
        try {
          const response = await axios.delete(`http://localhost:8000/employee/${idToDelete}`);
          console.log('Deleted:', response.data);
          // Perform any necessary state updates or actions after successful deletion
        } catch (error) {
          console.log(error);
        }
      };
    
    return (
        <div>
            <div className='h2 d-flex justify-content-center'>EmployeeList</div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Employee Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email id</th>
                        <th scope="col">Address</th>
                        <th scope="col">Job Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        data.map((e)=>(
                    <tr key={e._id}>
                        <td>{e._id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.gender}</td>
                        <td>{e.phoneno}</td>
                        <td>{e.emailid}</td>
                        <td>{e.adress}</td>
                        <td>{e.jobapplication
}</td>
                        <td>
                            <button onClick={()=>deleteemployee(e._id)} type="button" className="btn btn-danger">Delete</button>
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