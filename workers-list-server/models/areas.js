const Sequelize = require('sequelize');
const db = require('../config/database');

const AreasSchema = db.define('Area', {
    position: { type: Sequelize.NUMBER },
    k1: { type: Sequelize.NUMBER },
    k2: { type: Sequelize.NUMBER }
    // k3: { type: Sequelize.NUMBER },
    // k4: { type: Sequelize.NUMBER }
}, {
    tableName: 'Areas',
 });

 module.exports = AreasSchema;
