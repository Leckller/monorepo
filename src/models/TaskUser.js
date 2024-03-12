module.exports = (sequelize, DataTypes) => {
  const task_user = sequelize.define("task_user", {
    userId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: "task_users"
  });

  task_user.associate = (models) => {
    models.user.belongsToMany(models.task, {
      as: "tasks",
      through: task_user,
      foreingKey: "userId",
      otherKey: "taskId"
    });
    models.task.belongsToMany(models.user, {
      as: "users",
      through: task_user,
      foreingKey: "taskId",
      otherKey: "userId"
    });
  };

  return task_user;
};