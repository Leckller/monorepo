import { Optional } from 'sequelize';
import SequelizeUser, { UserWithNoId } from './ModelsSequelize/User.Sequelize';
import { User } from '../../types';
import { JWT } from '../../../utils'


interface userMethods {
  Cadastro(login: UserWithNoId): Promise<string>
  Login(login: UserWithNoId): Promise<string>
  EmailExists(Email: string): Promise<Boolean>
}

export default class UserModel implements userMethods {
  private db = SequelizeUser;

  async EmailExists(email: string): Promise<Boolean> {
    const query = await this.db.findOne({ where: { email } })
    if (!query) return false
    return true
  }

  async Cadastro(fields: UserWithNoId): Promise<string> {
    const { email, password } = fields;
    await this.db.create({ email, password });
    const token = JWT.genToken({ email, password });
    return token
  }

  async Login(fields: UserWithNoId): Promise<string> {

  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    const dbData = await this.db.findOne({ where: { email } });
    if (!dbData) return undefined;
    return dbData.dataValues;
  }

  async createUser(fields: Optional<User, 'id'>): Promise<User> {
    const { email, password } = fields;

    const createUser = await this.db.create({ email, password });

    return createUser.dataValues;
  }

  async deleteUser(id: number, email: string): Promise<void> {
    await this.db.destroy({ where: { id, email } });
  }
}