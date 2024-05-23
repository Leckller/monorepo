import { Optional } from "sequelize";
import { User } from '../../src/types'

export default class exampleMock {
  public createUser: Optional<User, 'id'> = {
    email: 'imBeautiful@gmail.com',
    password: 'password',
  }
}