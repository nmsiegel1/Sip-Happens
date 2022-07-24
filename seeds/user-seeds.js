const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'alecia',
    email: 'alecia@email.com',
    password: '1234',
  },
  {
    id: 2,
    username: 'benji',
    email: 'benji@email.com',
    password: '12345',
  },
  {
    id: 3,
    username: 'chase',
    email: 'chase@email.com',
    password: '123456',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
