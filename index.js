const mongoose = require('mongoose');
const Logger = require('nationalogger');

/**
 * @function connectDatabase
 * @description This is an async function that allows you to connect to the database
 */

const NatioDatabaseConnector = async (url) => {
  try {
    await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
    Logger.info('Connected to database ... ')
  } catch (err) {
    Logger.error(err.message);
    Logger.error("Exit the process with a failure ! We can't connect to the database ! ");
    //Exit the process with a failure if it cannot connect to the database
    process.exit(1);
  }
}

module.exports = NatioDatabaseConnector;