import SequelizeUser, { UserWithNoId } from './ModelsSequelize/User.Sequelize';
import { JWT } from '../../utils';
import { User } from '../../types';


interface userMethods {
  Cadastro(login: UserWithNoId): Promise<string>
  Login(login: UserWithNoId): Promise<string | undefined>
  EmailExists(Email: string): Promise<{ ok: boolean, query: User | null }>
}

export default class UserModel implements userMethods {
  private db = SequelizeUser;

  async EmailExists(email: string): Promise<{ ok: boolean, query: User | null }> {
    const query = await this.db.findOne({ where: { email } })
    if (!query) return { ok: false, query: null }
    return { ok: true, query: query.dataValues }
  }

  async Cadastro(fields: UserWithNoId): Promise<string> {
    const { email, password } = fields;
    const data = await this.db.create({ email, password });
    const token = JWT.genToken({ email, password, id: data.dataValues.id });
    return token
  }

  async Login(fields: UserWithNoId): Promise<string> {
    const { email, password } = fields;
    const data = await this.db.create({ email, password });
    const token = JWT.genToken({ email, password, id: data.dataValues.id });
    return token
  }

  // async deleteUser(): Promise<void> {
  //   await this.db.destroy({ where: { id, email } });
  // }
}
