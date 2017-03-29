package com.saicsd.learning.front.ijp.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.saicsd.learning.front.ijp.entities.Category;
import com.saicsd.learning.front.ijp.service.AuthenticationService;
import com.saicsd.learning.front.ijp.service.CategoryService;
import com.saicsd.learning.front.ijp.utility.Logger;

import inti.ws.spring.exception.client.UnauthorizedException;

/**
 * Controller that handles all requests related to {@link Category}
 * 
 * @author Sai Chandra Sekhar Dandu
 *
 */
@RestController
public class CategoryController {

  private static final Logger LOG = Logger.getInstance(CategoryController.class);

  /**
   * {@link AuthenticationService}
   */
  @Autowired
  AuthenticationService authenticationService;

  /**
   * {@link CategoryService}
   */
  @Autowired
  CategoryService categoryService;

  /**
   * Controller method that handles requests to get all categories
   * 
   * @param session HttpSession object that holds eId of Employee used for validating session
   * @return Iterable list of {@link Category}
   * @throws UnauthorizedException Thrown when the user is not logged in
   */
  @RequestMapping(value = "/categories", method = RequestMethod.GET)
  @ResponseBody
  public List<Category> getCategories(HttpSession session) throws UnauthorizedException {
    List<Category> categories = null;
    LOG.info("Request received to fetch all the categories");
    authenticationService.validateSession(session);
    categories = categoryService.getCategories();
    LOG.info("Request to fetch all the categories processed succesfully");
    return categories;
  }

}
