const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    comment_author: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    upvoteCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    downvoteCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    }, 
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "blog_post",
          key: "id",
        },
      },
  },
  {
    sequelize,
    modelName: 'Comment',
  }
);

module.exports = Comment;
