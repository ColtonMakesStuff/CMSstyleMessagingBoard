const { Comment } = require("../models");

const commentSeedData = [
  {
    user_id: 1,
    body: 'This is the first comment',
    upvoteCount: 5,
    downvoteCount: 2,
    post_id: 1,
  },
  {
    user_id: 2,
    body: 'This is the second comment',
    upvoteCount: 3,
    downvoteCount: 1,
    post_id: 1,
  },
  // Add more comment objects as needed
];
  
  const seedComments = () => Comment.bulkCreate(commentSeedData);

module.exports = seedComments;