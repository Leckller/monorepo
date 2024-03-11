const { JWT } = require("../utils");
const { user } = require("../models");

module.exports = async (req, res, next) => {
  const { auth } = req.headers;
  try {
    const extractToken = JWT.extToken(auth);
    const isValidToken = JWT.verToken(extractToken);

    const tokenExists = await user.findOne({ where: { email: isValidToken.email, password: isValidToken.password } });

    if (!tokenExists) return res.status(404).json({ message: "Login inválido" });

    req.userLogin = isValidToken;

  } catch (err) {
    return res.status(400).json("Senha ou Login Incorretos");
  }
  next();
};