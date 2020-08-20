const Sequelize = require("sequelize");

const sequelize = new Sequelize("adminbro", "root", "root", {
    host: "localhost",
    dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./models/user.model")(sequelize, Sequelize);

module.exports = db;
