const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Comment, { foreignKey: 'user_id', as: 'user_comments' });
Comment.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Post.hasMany(Comment, { foreignKey: 'post_id', as: 'post_comments' });
Comment.belongsTo(Post, { foreignKey: 'post_id', as: 'post' });

User.hasMany(Post, { foreignKey: 'user_id', as: 'user_posts' });
Post.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

module.exports = {
  Post,
  Comment,
  User,
};

  
  module.exports = {
    Post,
    Comment,
    User,
  };