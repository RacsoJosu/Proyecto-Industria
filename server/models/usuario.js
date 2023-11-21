const {sequelize} = require("../config/database");
const { DataTypes } = require('sequelize');

const Usuario = sequelize.define('usuarios', 
{
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    nombre: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
        unique: true,
    },
    contraseña: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.ENUM('admin', 'user'),
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.DATE
    },
},
{
    tableName:'usuarios',
    timestamps: true,  
});

Usuario.sync({ force: false })
  .then(() => {
    console.log("Tabla de Usuarios sincronizada");
  })
  .catch((error) => {
    console.error("Error al sincronizar tabla de Usuarios:", error);
});


module.exports = Usuario


