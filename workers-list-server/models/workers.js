const Sequelize = require('sequelize');
const db = require('../config/database');

const WorkersSchema = db.define('Worker', {

    name: { type: Sequelize.STRING },
    job: { type: Sequelize.STRING },
    domain: { type: Sequelize.STRING },
    project: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    lphone: { type: Sequelize.STRING },
    mphone: { type: Sequelize.STRING },
    foto: { type: Sequelize.STRING },
    stand: { type: Sequelize.NUMBER }

}, {
   tableName: 'Workers',
});

module.exports = WorkersSchema;
