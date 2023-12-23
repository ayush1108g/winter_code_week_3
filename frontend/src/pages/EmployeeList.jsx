import React from 'react'

const EmployeeList = () => {
    return (
        <div>
            <div className='h2 d-flex justify-content-center'>EmployeeList</div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                        <th scope="col">Actions</th>
                        <th scope="col">Actions</th>
                        <th scope="col">Actions</th>
                        <th scope="col">123</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Product 1</td>
                        <td>$100</td>
                        <td>10</td>
                        <td>
                            <button type="button" className="btn btn-primary">Edit</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default EmployeeList