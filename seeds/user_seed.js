const { User } = require('../models');

const userData = [
  {
    "name": "Bob Ross",
    "email": "test@test.com",
    "password": "$2a$10$P4TiD6D3NG0K.InsL/xRWeuiPuCFaaiI.Wrm3rElchnPZnHov1iEW"
  },
  {
    "name": "Sal",
    "email": "sal@hotmail.com",
    "password": "$2a$10$P4TiD6D3NG0K.InsL/xRWeuiPuCFaaiI.Wrm3rElchnPZnHov1iEW"
  },
  {
    "name": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "$2a$10$P4TiD6D3NG0K.InsL/xRWeuiPuCFaaiI.Wrm3rElchnPZnHov1iEW"
  },
  {
    "name": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "$2a$10$P4TiD6D3NG0K.InsL/xRWeuiPuCFaaiI.Wrm3rElchnPZnHov1iEW"
  },
  {
    "name": "Jordan",
    "email": "jordan99@msn.com",
    "password": "$2a$10$P4TiD6D3NG0K.InsL/xRWeuiPuCFaaiI.Wrm3rElchnPZnHov1iEW"
  },
  {
    "name": "Blake",
    "email": "the_blake@yahoo.com",
    "password": "$2a$10$P4TiD6D3NG0K.InsL/xRWeuiPuCFaaiI.Wrm3rElchnPZnHov1iEW"
  }


]

const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;