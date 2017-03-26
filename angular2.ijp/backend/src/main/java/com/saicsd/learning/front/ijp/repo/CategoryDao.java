package com.saicsd.learning.front.ijp.repo;

import java.util.List;

import com.saicsd.learning.front.ijp.entities.Category;

/**
 * Dao Class that deals with all database operations on {@link Category}
 * 
 * @author Sai Chandra Sekhar Dandu
 *
 */
public interface CategoryDao {

  /**
   * Method that retrieves all categories in the database.
   * 
   * @return List of {@link Category}
   */
  public List<Category> getCategories();
}
