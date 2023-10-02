const {DataTypes} = require('sequelize');
const { roles } = require("../../config");

const UserModel = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      county: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
     };
     //create a user
     module.exports = {
        initialize: (sequelize) => {
          this.model = sequelize.define("user", UserModel);
        },
      
        createUser: (user) => {
          return this.model.create(user);
        },
        getUser: (req, res) => {
            const {
              user: { userId },
            } = req;
        },
        updateUser: (req, res) => {
            const {
              user: { userId },
              body: payload,
            } = req;
        }
      };
//user endpoint
