module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    userName: DataTypes.STRING
  }, {
    timestamps: false
  });

  return user;
};