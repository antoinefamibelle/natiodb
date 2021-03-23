const mongoose = require('mongoose');

/**
 * @function connectDatabase
 * @description This is an async function that allows you to connect to the database
 */

const NatioDatabaseConnector = async () => {
  try {
    await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
    console.log('MongoDb connected ...');
  } catch (err) {
    console.error(err.message);
    //Exit the process with a failure if it cannot connect to the database
    process.exit(1);
  }
}

module.exports = NatioDatabaseConnector;