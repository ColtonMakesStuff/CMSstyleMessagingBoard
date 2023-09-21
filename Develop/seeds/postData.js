const { BlogPost } = require("../models");

const blogPostData = [
    {
      "title": "First Post",
      "body": "This is the body of the first post.",
      "userId": 1
    },
    {
      "title": "Second Post",
      "body": "This is the body of the second post.",
      "userId": 1
    },
    {
      "title": "Third Post",
      "body": "This is the body of the third post.",
      "userId": 2
    },
    {
      "title": "Fourth Post",
      "body": "This is the body of the fourth post.",
      "userId": 1
    },
    {
      "title": "Fifth Post",
      "body": "This is the body of the fifth post.",
      "userId": 1
    },
    {
      "title": "Sixth Post",
      "body": "This is the body of the sixth post.",
      "userId": 2
    }
  ]
  const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;