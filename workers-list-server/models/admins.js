const Sequelize = require('sequelize');
const db = require('../config/database');

const AdminsSchema = db.define('Admin', {
    name: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }

}, {
    tableName: 'Admins',
 });

 module.exports = AdminsSchema;
