const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'alecia',
    email: 'alecia@email.com',
  },
  {
    id: 2,
    username: 'benji',
    email: 'benji@email.com',
  },
  {
    id: 3,
    username: 'chase',
    email: 'chase@email.com',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
