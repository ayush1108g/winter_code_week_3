import React from 'react'

const EmployeeList = () => {
    const Dummydata = [
        {EmployeeID: '123', Name:"something",Age:"12",Gender:"male",Phoneno:'765432',emailid:'123@gfds',address:'ffvdscd',jobtype:'doctor'},
        {EmployeeID: '1234', Name:"somethi",Age:"14",Gender:"male",Phoneno:'7652',emailid:'12dv3@gfds',address:'ffvdcdscd',jobtype:'doctor'}
    ]
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
                        Dummydata.map((e)=>(
                    <tr>
                        <td>{e.EmployeeID}</td>
                        <td>{e.Name}</td>
                        <td>{e.Age}</td>
                        <td>{e.Gender}</td>
                        <td>{e.Phoneno}</td>
                        <td>{e.emailid}</td>
                        <td>{e.address}</td>
                        <td>{e.jobtype}</td>
                        <td>
                            <button type="button" className="btn btn-danger">Delete</button>
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