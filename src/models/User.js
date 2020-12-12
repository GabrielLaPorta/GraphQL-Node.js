const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
    timestamps: false
});

User.sync({ force: true });

module.exports = User;