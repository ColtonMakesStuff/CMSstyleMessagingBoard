const { Comment } = require("../models");

const commentData = [
    {
      "body": "This is a comment on the first post.",
      "postId": 1,
      "userId": 2
    },
    {
      "body": "This is a comment on the second post.",
      "postId": 2,
      "userId": 1
    },
    {
      "body": "This is a comment on the third post.",
      "postId": 3,
      "userId": 1
    },
    {
      "body": "This is a comment on the first post.",
      "postId": 1,
      "userId": 2
    },
    {
      "body": "This is a comment on the second post.",
      "postId": 2,
      "userId": 1
    },
    {
      "body": "This is a comment on the third post.",
      "postId": 3,
      "userId": 1
    }
  ]
  
  const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;