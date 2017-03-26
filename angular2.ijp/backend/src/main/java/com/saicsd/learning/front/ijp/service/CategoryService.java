package com.saicsd.learning.front.ijp.service;

import java.util.List;

import com.saicsd.learning.front.ijp.entities.Category;

/**
 * Service that handles all requests regarding Category Entity.
 * 
 * @author saichandrasekhardandu
 *
 */
public interface CategoryService {

  /**
   * Method that fetches all the categories in the respository
   * 
   * @return List of Category objects
   */
  public List<Category> getCategories();

}
