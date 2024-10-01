
package com.example.ems.ems_record.service;

import com.example.ems.ems_record.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeDto, EmployeeDto updatedEmployee);

    void deleteEmployee(Long employeeId);
//    void because we don't need to return anything
}
