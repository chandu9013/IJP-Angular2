package com.saicsd.learning.front.ijp.service;

import com.saicsd.learning.front.ijp.entities.Role;
import com.saicsd.learning.front.ijp.model.EmployeeModel;
import com.saicsd.learning.front.ijp.model.LoginModel;

public interface EmployeeService {

  public EmployeeModel addEmployee(LoginModel loginModel);

  public EmployeeModel addEmployee(LoginModel loginModel, Role role);

  public EmployeeModel addEmployeeIfNotExist(LoginModel loginModel);
}
