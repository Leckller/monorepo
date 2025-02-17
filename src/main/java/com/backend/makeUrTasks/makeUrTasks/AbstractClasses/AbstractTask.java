package com.backend.makeUrTasks.makeUrTasks.AbstractClasses;

import java.util.Date;

/**
 * Interface da tarefa
 */
public abstract class AbstractTask {

  private String titulo;
  private boolean finished;

  private Date createdAt;
  private Date updatedAt;

  private String description;
  private String conclusionNotes;

  public void TaskInterface (String titulo, String description) {
    this.titulo = titulo;
    this.description = description;
    this.createdAt = new Date();
  }

  public Date getCreatedAt() {
    return createdAt;
  }

  public boolean isFinished() {
    return finished;
  }

  public Date getUpdatedAt() {
    return updatedAt;
  }

  public String getConclusionNotes() {
    return conclusionNotes;
  }

  public String getDescription() {
    return description;
  }

  public String getTitulo() {
    return titulo;
  }

  public void setConclusionNotes(String conclusionNotes) {
    this.conclusionNotes = conclusionNotes;
  }

  public void setTitulo(String titulo) {
    this.titulo = titulo;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setFinished() {
    this.finished = !this.finished;
  }

}
