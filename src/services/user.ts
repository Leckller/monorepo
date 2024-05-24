import { UserWithNoId } from "../database/models/ModelsSequelize/User.Sequelize";
import UserModel from "../database/models/User.model";
import { UserServiceInt, messageService } from "../types";
import { isValidEmail } from "../utils";

export default class UserService implements UserServiceInt {
  private model = UserModel

  async cadastro(fields: UserWithNoId): Promise<messageService<string>> {
    const { email, password } = fields;
    if (password.length < 6) {
      return { data: "", message: "Sua senha deve ser maior que 6 digitos." }
    }
    if (!isValidEmail(email)) {
      return { data: "", message: "Email invalido." }
    }
    const verifyEmail = await this.model.EmailExists(email);
    if (verifyEmail.ok) {
      return { data: "", message: "Este email já está cadastrado." }
    }

    const data = await this.model.Cadastro({ email, password });
    return { data, message: "Cadastro realizado com sucesso" }

  }
  async login(fields: UserWithNoId): Promise<messageService<string>> {
    const { email, password } = fields;
    const verifyEmail = await this.model.EmailExists(email);
    if (verifyEmail.ok) {
      return { data: "", message: "Este email já está cadastrado." }
    }
    if (verifyEmail.query?.password !== fields.password) {
      return { data: "", message: "Login inválido" }
    }

    const data = await this.model.Login({ email, password });
    return { data, message: "Bem vindo de volta!" }
  }
}