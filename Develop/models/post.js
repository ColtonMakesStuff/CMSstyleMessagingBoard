const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    callToAction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    blog_author: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
  },
  {
    sequelize,
    modelName: 'post',
  }
);

module.exports = Post;
