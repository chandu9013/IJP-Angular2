package com.saicsd.learning.front.ijp.model;

public class TeamModel {

  private int id;
  private String name;

  public TeamModel(int id, String name) {
    super();
    this.id = id;
    this.name = name;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

}
