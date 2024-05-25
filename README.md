Casos de uso: ( sendo @ = ator e # = sistema )

  @ -> (login/cadastro) ->#include (gerar token)

  @ -> (cria nova tarefa) <->#extends (definir data limite; apagar tarefa; editar tarefa) ->#include (salvar no bd) 

requisitos:

  1 -> Pagina de cadastro-login
    1.1 - deve ser possivel criar uma conta (login e senha)
      1.1 - Não poderá ser criado um usuário com email já cadastrado
      1.2 - a senha deve ter no minimo 6 digitos e no maximo 20
      1.3 - o login deve ser um email
    1.2 - após criar/logar a conta deverá receber um token para utilizar nas requisições
  
  2 -> Pagina de Tarefas
    1.1 - Deve ser possivel criar uma nova tarefa
      <!-- 1.1 - Os nomes das tarefas devem ser salvos em maiusculo -->
      <!-- 1.2 - Não deve ser possível adicionar outra tarefa de mesmo nome -->
      1.3 - A tarefa deve possuir um nome, uma descrição e se for solicidado uma lista de checks de no maximo 5
      1.4 - Não deve ser possivel criar uma tarefa sem um token valido.
    1.2 - Deve ser possivel alterar os dados da tarefa
    1.3 - Deve ser possivel deletar uma tarefa
    1.4 - Deve ser possivel acessar todas as tarefas de um unico usuario


Tecnologias utilizadas neste projeto :
* Back-End
  
  - Node.js
  - Typescript
  - Mocha / Chai / Sinon
  - Mysql
  - Sequelize
  - Docker
