const seedWines = require('./wine-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedWines();
  console.log('\n----- WINES SEEDED -----\n');

  process.exit(0);
};

seedAll();
