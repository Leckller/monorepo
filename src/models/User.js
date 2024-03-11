module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    nickName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    timestamps: false
  });

  return user;
};