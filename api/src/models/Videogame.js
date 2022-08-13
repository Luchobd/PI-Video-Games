const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      released: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      platforms: {
        // STRING
        type: DataTypes.STRING,
        allowNull: false,
      },
      background_image: {
        type: DataTypes.TEXT,
      },
      //pending
      createdInDb: {
        type: DataTypes.BOOLEAN,
        default: true,
        // allowNull: false,
      },
    },
    {
      timestamps: false, //  Son las dos (createdAt,updatedAt)
      createdAt: false, // muestra cuando añado un nuevo un juego
      updatedAt: false, // Muestra la modificacion dle video juego
    }
  );
};

// Minuto 18 del video
