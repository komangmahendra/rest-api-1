'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  todo.associate = function(models) {
    // associations can be defined here
    todo.belongsTo(models.User, {foreignKey : "userId"})
  };
  return todo;
};