package com.saicsd.learning.front.ijp.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saicsd.learning.front.ijp.entities.Team;
import com.saicsd.learning.front.ijp.model.TeamModel;
import com.saicsd.learning.front.ijp.repo.TeamDao;
import com.saicsd.learning.front.ijp.utility.MappingUtility;

/**
 * Service that handles are requests regarding {@link Team}
 * 
 * @author saichandrasekhardandu
 *
 */
@Service
public class TeamServiceImpl implements TeamService {

  /**
   * {@link MappingUtility}
   */
  @Autowired
  MappingUtility mUtility;

  /**
   * {@link TeamDao}
   */
  @Autowired
  TeamDao teamDao;

  /**
   * Method to retrieve all teams in the repository.
   */
  @Transactional
  @Override
  public List<TeamModel> getTeams() {
    List<Team> teams = teamDao.getAll();
    return mUtility.mapToTeamModels(teams);
  }

}
