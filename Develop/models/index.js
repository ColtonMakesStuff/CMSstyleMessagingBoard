const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

//A User can have many comments
  User.hasMany(Comment, {foreignKey: 'user_id', as: 'comments'});
  Comment.belongsTo(User, {foreignKey: 'user_id'});
  
  //A Post can have many comments 
  Post.hasMany(Comment, {foreignKey: 'blog_id', as: 'comments'});
  Comment.belongsTo(Post, {foreignKey: 'blog_id'});
  
  //A User can have many posts
  User.hasMany(Post, {foreignKey: 'user_id', as: 'blog_id'});
  Post.belongsTo(User, {foreignKey: 'user_id'});
  
  
  module.exports = {
    Post,
    Comment,
    User,
  };