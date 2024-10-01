import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployee = () => axios.get(EMPLOYEE_API_BASE_URL);

export const createEmployee = (employee) => axios.post(EMPLOYEE_API_BASE_URL, employee);

export const getEmployee = (employeeId) => axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);

export const updateEmployee = (employee, employeeId) => axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
// employeeId and employee are two parameters for the updateEmployee function. The employeeId is the id of the employee to be updated, and the employee is the updated employee object.

export const deleteEmployee = (employeeId) => axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);