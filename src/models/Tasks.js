module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    taskName: DataTypes.STRING
  }, {
    timestamp: true
  });

  return Task;
};