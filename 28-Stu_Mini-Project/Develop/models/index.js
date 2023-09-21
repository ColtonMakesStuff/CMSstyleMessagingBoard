const User = require('./User');
const Comment = require('./comment');
const Post = require('./post');


User.hasMany(Post);
User.hasMany(Comment);

Post.belongsTo(User);
Post.hasMany(Comment);

Comment.belongsTo(User);
Comment.belongsTo(Post);


