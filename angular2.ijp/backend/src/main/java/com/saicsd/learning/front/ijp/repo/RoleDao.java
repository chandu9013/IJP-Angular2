package com.saicsd.learning.front.ijp.repo;

import com.saicsd.learning.front.ijp.entities.Employee;
import com.saicsd.learning.front.ijp.entities.Role;
import com.saicsd.learning.front.ijp.entities.UserRole;

/**
 * Dao that deals with all database operations on {@link Role} and {@link UserRole}
 * 
 * @author Sai Chandra Sekhar Dandu
 *
 */
public interface RoleDao {

  /**
   * Method that retrieves Role by role name
   * 
   * @param role {@link Role}
   * @return {@link Role} with role Id
   */
  public Role getRoleByName(String role);

  /**
   * Method that adds a new role for an employee
   * 
   * @param userRole {@link UserRole}
   */
  public void addUserRole(UserRole userRole);

  /**
   * Method to retrieve role of an employee
   * 
   * @param employee {@link Employee}
   * @return {@link Role}
   */
  public Role getRolebyEmployee(Employee employee);

}
