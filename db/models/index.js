const Company = require('./Company')
const Product = require('./Product')
const Offering = require('./Offering')
const db = require('../db')


// const seed = async (force = false ) => {

//     try{
//         await db.sync ({force});
//         console.log(chalk.green(`DB successfully connected, and synced. Force: ${force}`));
//     } catch (e) {
//       console.log(chalk.red('Error while connecting to database.'));
  
//       throw e;
//     }
//   };


module.exports = {
Company,
Product,
Offering
}