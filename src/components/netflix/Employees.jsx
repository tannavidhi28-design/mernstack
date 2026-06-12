import React, { useState } from 'react'

export const Employees = () => {

    const [employees, setEmployees] = useState([
        { id: 1, name: "Ram", age: 23, salary: 23000 },
        { id: 2, name: "Shyam", age: 25, salary: 25000 },
        { id: 3, name: "Mohan", age: 22, salary: 20000 },
        { id: 4, name: "Ravi", age: 24, salary: 28000 },
        { id: 5, name: "Karan", age: 26, salary: 30000 }])

        const deleteEmployee= (id) => {
            let updateEmp = employees.filter(employee=>employee.id!=id)
            setEmployees(updateEmp)
        }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Employees Data</h1>
            {
            employees.length==0 ?<h1>NO EMPLOYEES FOUND</h1>:
            
            <table border="1" cellPadding="10" align="center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>SALARY</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp) => {
                            return (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.age}</td>
                                    <td>{emp.salary}</td>
                                    <td>
                                        <button onClick={() =>deleteEmployee(emp.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )})
                    }
                </tbody>
            </table>
}
        </div>
    )
}