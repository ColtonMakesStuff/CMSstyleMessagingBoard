const { Comment } = require("../models");

const commentSeedData = [
  {
    comment_author: 1,
    body: 'This is the first comment',
    upvoteCount: 5,
    downvoteCount: 2,
    blog_id: 1,
  },
  {
    comment_author: 2,
    body: 'This is the second comment',
    upvoteCount: 3,
    downvoteCount: 1,
    blog_id: 1,
  },
  // Add more comment objects as needed
];
  
  const seedComments = () => Comment.bulkCreate(commentSeedData);

module.exports = seedComments;