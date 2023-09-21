const userData = require('./userData');
const commentData = require('./commentData');
const postData = require('./postData')


const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n------DATABASE SYNCED------\n");

  await userData();
  console.log("\n------USERS SEEDED------\n");

  await postData();
  console.log("\n------BLOGS SEEDED------\n");

  await commentData();
  console.log("\n------COMMENTS SEEDED------\n");

  process.exit(0);
};

seedAll();
seedDatabase();
