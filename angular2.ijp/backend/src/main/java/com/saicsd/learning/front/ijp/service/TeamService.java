package com.saicsd.learning.front.ijp.service;

import java.util.List;

import com.saicsd.learning.front.ijp.entities.Team;
import com.saicsd.learning.front.ijp.model.TeamModel;

/**
 * Service that handles are requests regarding {@link Team}
 * 
 * @author Sai Chandra Sekhar Dandu
 *
 */
public interface TeamService {

  /**
   * Method to retrieve all teams in the repository.
   * 
   * @return List of {@link TeamModel}
   */
  public List<TeamModel> getTeams();

}
