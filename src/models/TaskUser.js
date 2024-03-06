module.exports = (sequelize) => {
  const task_user = sequelize.define("task_user", {
  }, {
    timestamps: false,
    tableName: "task_users"
  });

  task_user.associate = (models) => {
    models.user.belongsToMany(models.task, {
      as: "tasks",
      through: task_user,
      foreingKey: "taskId",
      otherKey: "userId"
    });
    models.task.belongsToMany(models.user, {
      as: "users",
      through: task_user,
      foreingKey: "userId",
      otherKey: "taskId"
    });
  };

  return task_user;
};