require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const characterModel = require("./models/Character");
const UserModel = require("./models/User");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false, native: false }
);

characterModel(sequelize);
UserModel(sequelize);

const { User, Character } = sequelize.models;

User.belongsToMany(Character, { through: "user_favorite" });
Character.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
