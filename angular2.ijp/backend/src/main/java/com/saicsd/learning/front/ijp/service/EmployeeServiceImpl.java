package com.saicsd.learning.front.ijp.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saicsd.learning.front.ijp.constants.Constants;
import com.saicsd.learning.front.ijp.entities.Employee;
import com.saicsd.learning.front.ijp.entities.Role;
import com.saicsd.learning.front.ijp.entities.UserRole;
import com.saicsd.learning.front.ijp.model.EmployeeModel;
import com.saicsd.learning.front.ijp.model.LoginModel;
import com.saicsd.learning.front.ijp.model.RoleModel;
import com.saicsd.learning.front.ijp.repo.EmployeeDao;
import com.saicsd.learning.front.ijp.repo.RoleDao;
import com.saicsd.learning.front.ijp.utility.Logger;

@Service
public class EmployeeServiceImpl implements EmployeeService {

  private static final Logger LOG = Logger.getInstance(EmployeeServiceImpl.class);

  @Autowired
  RoleDao roleDao;

  @Autowired
  EmployeeDao employeeDao;

  @Override
  public EmployeeModel addEmployee(LoginModel loginModel, Role role) {
    Employee employee = new Employee();
    employee.setEmailId(loginModel.getEmailId());
    employee.setName(loginModel.getName());
    // Add Employee to DB
    employee.setEId(employeeDao.save(employee));
    // Add Role to UserRole

    UserRole userRole = new UserRole();
    userRole.setEmployee(employee);
    userRole.setRole(role);
    roleDao.addUserRole(userRole);

    RoleModel roleModel = new RoleModel();
    roleModel.setRId(role.getRId());
    roleModel.setRoleName(role.getRoleName());
    EmployeeModel employeeModel = new EmployeeModel(employee.getEId(), employee.getEmailId(),
        roleModel, loginModel.getName());
    return employeeModel;
  }

  @Override
  public EmployeeModel addEmployee(LoginModel loginModel) {

    // Add Employee to DB
    Role role = roleDao.getRoleByName(Constants.ROLE_EMPLOYEE);

    EmployeeModel employeeModel = addEmployee(loginModel, role);

    return employeeModel;
  }

  @Transactional
  @Override
  public EmployeeModel addEmployeeIfNotExist(LoginModel loginModel) {
    Employee employee = employeeDao.getEmployeeByEmail(loginModel.getEmailId());
    if (employee == null) {
      return addEmployee(loginModel);
    } else {
      LOG.debug("Employee already exists");
      Role role = roleDao.getRolebyEmployee(employee);
      RoleModel roleModel = new RoleModel();
      roleModel.setRId(role.getRId());
      roleModel.setRoleName(role.getRoleName());
      EmployeeModel employeeModel = new EmployeeModel(employee.getEId(), employee.getEmailId(),
          roleModel, loginModel.getName());
      return employeeModel;
    }
  }

}
