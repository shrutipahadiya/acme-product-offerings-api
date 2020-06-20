const Sequelize = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:tiger123@localhost:2052/acme_products';
const db = new Sequelize (DATABASE_URL);


const seed = async (force = false) => {
  try {
    await db.sync({ force });

    console.log(chalk.green(`DB successfully connected, and synced. Force: ${force}`));
  } catch (e) {
    console.log(chalk.red('Error while connecting to database.'));

    throw e;
  }
};



//console.log("db is ",db)

module.exports = {db,seed}
