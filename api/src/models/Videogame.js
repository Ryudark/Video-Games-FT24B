const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    esCreado:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
