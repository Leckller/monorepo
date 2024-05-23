import SequelizeUser, { UserWithNoId } from './ModelsSequelize/User.Sequelize';
import { JWT } from '../../utils';


interface userMethods {
  Cadastro(login: UserWithNoId): Promise<string>
  Login(login: UserWithNoId): Promise<string | undefined>
  EmailExists(Email: string): Promise<Boolean>
}

class UserModel implements userMethods {
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

  async Login(fields: UserWithNoId): Promise<string | undefined> {
    const { email, password } = fields;
    const query = await this.db.findOne({ where: { email } })

    if (!query || query.dataValues.password !== password) return undefined

    const token = JWT.genToken({ email, password });
    return token
  }

  // async deleteUser(): Promise<void> {
  //   await this.db.destroy({ where: { id, email } });
  // }
}

export default new UserModel()