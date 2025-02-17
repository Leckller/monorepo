package com.backend.makeUrTasks.makeUrTasks.service;

import com.backend.makeUrTasks.makeUrTasks.dto.TarefaDto;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

  public TarefaDto novaTarefa (String titulo) {
    return new TarefaDto(titulo);
  }

}
