'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = require('dotenv').config(); //add .env file 
const config = JSON.parse(env.parsed.DB_INFO);
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


// create database using schema, if tables not exists // table 구조!

db.Toilet = require('./entity/Toilet_entity')(sequelize, Sequelize);
db.User = require('./entity/User_entity')(sequelize, Sequelize); 
db.Review = require('./entity/Review_entity')(sequelize, Sequelize);

db.Toilet.hasMany(db.Review);
db.User.hasMany(db.Review);
db.Review.belongsTo(db.Toilet);
db.Review.belongsTo(db.User);

module.exports = db;


