const Sequelize = require('sequelize');
const UserModel = require('../app/models/user.model.js');

/**
 * Please create the database prior to start the server. 
 * Tables will be automatically created
 * new sequelize connection 
 *  */

const sequelize = new Sequelize('social', 'root', null, {
    host: '127.0.0.1', // your database server IP
    dialect: 'mysql',
    // dialectModule: 'mysql2'  // requires in some versions of sequelize
    port: '3306'
});

const User = new UserModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('user table has been created')
    });

module.exports = User;