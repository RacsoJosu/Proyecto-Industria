const {sequelize} = require("../config/database");
const { DataTypes } = require('sequelize');

const Paquete = sequelize.define('paquetes', 
    {
    descripcion: {
        type: DataTypes.STRING,
    },
    peso: {
        type: DataTypes.FLOAT,
    },
    estado: {
        type: DataTypes.ENUM('en camino', 'en espera', 'entregado', 'confirmado'),
    },
    fechaEnvio: {
        type: DataTypes.DATE,
    },
    fechaRecibido: {
        type: DataTypes.DATE,
    },
    fechaEntregado: {
        type: DataTypes.DATE,
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.DATE
    },
},
{
    tableName:'paquetes',
    timestamps: true,  
});


Paquete.sync({ force: false })
  .then(() => {
    console.log("Tabla de Paquetes sincronizada");
  })
  .catch((error) => {
    console.error("Error al sincronizar tabla de Paquetes:", error);
});
module.exports = Paquete
