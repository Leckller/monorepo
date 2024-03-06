module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define("task", {
    taskName: DataTypes.STRING
  }, {
    timestamps: false
  });

  return task;
};