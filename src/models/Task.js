module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define("task", {
    taskName: DataTypes.STRING,
    deadline: DataTypes.DATE,
  }, {
    timestamps: false
  });

  return task;
};