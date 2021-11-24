const sequelize = require('../config/connection');
require('dotenv').config();
const userSeed = require('./user_seed.js');
const commentSeed = require('./comment_seed.js');
const postSeed = require('./post_seed.js');

process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD

console.log("usernmae",process.env.DB_NAME)
console.log("DB_USER",process.env.DB_USER)
console.log("DB_PASSWORD",process.env.DB_PASSWORD)


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await userSeed();
  console.log('\n----- USERS Seed -----\n');
  await postSeed();
  console.log('\n----- POSTS DATA -----\n');
  await commentSeed();
  console.log('\n----- COMMENTS Seed -----\n');
  process.exit(0);
};

seedDatabase();
