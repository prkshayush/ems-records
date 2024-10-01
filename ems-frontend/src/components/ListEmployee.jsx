import { useEffect, useState } from "react"
import { deleteEmployee, listEmployee } from "../services/EmployeeServices";
import { useNavigate } from "react-router-dom";


const ListEmployee = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployee().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    function addNewEmployee() {
        navigator('/add-employee');
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id) {
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    };

    return (
        <div>
            <h2>List of Employees</h2>
            <button onClick={addNewEmployee}>Add Employee</button>
            <table>
                <thead>
                    <tr>
                        <th>&nbsp; First Name &nbsp;</th>
                        <th>&nbsp; Last Name &nbsp;</th>
                        <th>&nbsp; Email &nbsp;</th>
                        <th>&nbsp; Actions &nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.lastName}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={() => updateEmployee(employee.id)}>Delete</button>
                                    <button onClick={() => removeEmployee(employee.id)}>Update</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee