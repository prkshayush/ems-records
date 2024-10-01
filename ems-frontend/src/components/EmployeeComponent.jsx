import { useEffect, useState } from "react"
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeServices"
import { useNavigate, useParams } from "react-router-dom"

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const { id } = useParams();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    // can also be written as:
    // const handleFirstName = (e) => setFirstName(e.target.value);

    function handleLastName(e) {
        setLastName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    // using useEffect to fetch the employee details by id to be used in the edit form
    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [id])

    // function to save employee details
    // function saveEmployee(e) {
    //     e.preventDefault();

    //     if (validationForm()) {
    //         const employee = { firstName, lastName, email };
    //         console.log(employee)
    //         createEmployee(employee).then((response) => {
    //             console.log(response.data)
    //             navigator('/employee')
    //         })
    //     }
    // }

    // function to save or update employee details logic
    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        if (validationForm()) {
            const employee = { firstName, lastName, email };
            console.log(employee)
            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employee');
                }).catch(error => {
                    console.log(error);
                })
            } else {
                createEmployee(employee).then((response) => {
                    console.log(response.data)
                    navigator('/employee')
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }

    function validationForm() {
        let valid = true;
        const errorsCopy = { ...errors }

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First Name is required';
            valid = false;
        }
        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last Name is required';
            valid = false;
        }
        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email Id is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h2>Edit Employee</h2>
        }
        else {
            return <h2>Add Employee</h2>
        }
    }

    return (
        <div>
            <div>
                {
                    pageTitle()
                }
                <div>
                    <form action="/">


                        {/* firstName */}
                        <label htmlFor="firstName">First&nbsp;Name :&nbsp;</label>
                        <input type="text" name="firstName" placeholder="John" value={firstName} onChange={handleFirstName} />
                        {errors.firstName && <div>{errors.firstName} </div>}

                        {/* lastName */}
                        <label htmlFor="lastName">Last&nbsp;Name :&nbsp;</label>
                        <input type="text" name="lastName" placeholder="Doe" value={lastName} onChange={handleLastName} />
                        {errors.lastName && <div>{errors.lastName} </div>}

                        {/* email */}
                        <label htmlFor="email">Email&nbsp; :&nbsp;</label>
                        <input type="text" name="email" placeholder="johndoe@jmc.com" value={email} onChange={handleEmail} />
                        {errors.email && <div>{errors.email} </div>}

                        <button onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EmployeeComponent;