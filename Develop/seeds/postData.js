const { Post } = require("../models");

const postSeedData = [
  {
    title: 'First Post',
    body: 'This is the first post',
    user_id: 1,
  },
  {
    title: 'Second Post',
    body: 'This is the second post',
    user_id: 2,
  },
  // Add more post objects as needed
];

  const seedBlogPosts = () => Post.bulkCreate(postSeedData);

module.exports = seedBlogPosts;