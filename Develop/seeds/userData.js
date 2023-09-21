const { User } = require("../models");
const bcrypt = require("bcrypt");

const usersData = [
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
  },
  {
    "username": "jane_smith",
    "email": "jane@example.com",
    "password": "password456"
  },
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
  },
  {
    "username": "jane_smith",
    "email": "jane@example.com",
    "password": "password456"
  }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;