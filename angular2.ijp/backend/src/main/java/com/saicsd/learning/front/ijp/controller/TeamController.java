package com.saicsd.learning.front.ijp.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.saicsd.learning.front.ijp.entities.Team;
import com.saicsd.learning.front.ijp.model.TeamModel;
import com.saicsd.learning.front.ijp.service.AuthenticationService;
import com.saicsd.learning.front.ijp.service.TeamService;
import com.saicsd.learning.front.ijp.utility.Logger;

import inti.ws.spring.exception.client.UnauthorizedException;

/**
 * Controller that handles all requests regarding {@link Team}
 * 
 * @author Sai Chandra Sekhar Dandu
 *
 */
@RestController
public class TeamController {

  private static final Logger LOG = Logger.getInstance(TeamController.class);

  /**
   * {@link AuthenticationService}
   */
  @Autowired
  AuthenticationService authenticationService;

  /**
   * {@link TeamService}
   */
  @Autowired
  TeamService teamService;

  /**
   * Method to handle requests for fetching all teams {@link Team}
   * 
   * @param session {@link HttpSession} object used to validate user's session
   * @return
   * @throws UnauthorizedException
   */
  @RequestMapping(value = "/teams", method = RequestMethod.GET)
  @ResponseBody
  public List<TeamModel> getTeams(HttpSession session) throws UnauthorizedException {
    List<TeamModel> teams = null;
    LOG.info("Request received to fetch all the teams");
    authenticationService.validateSession(session);
    teams = teamService.getTeams();
    LOG.info("Request to fetch all the categories processed succesfully");
    return teams;
  }

}
