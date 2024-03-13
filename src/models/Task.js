module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define("task", {
    taskName: DataTypes.STRING,
    deadline: DataTypes.DATE,
    completed: DataTypes.BOOLEAN,
    description: DataTypes.STRING
  }, {
    timestamps: false
  });

  return task;
};