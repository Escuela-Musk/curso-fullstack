// Ejemplo didáctico de transacción ACID usando Sequelize y la base de datos de Modelo.sql
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("basededatos", "usuario", "contraseña", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

// Definición de modelos según Modelo.sql
const Asistente = sequelize.define(
  "asistente",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dni: DataTypes.TEXT,
    nombre: DataTypes.TEXT,
    correo: DataTypes.TEXT,
    telefono: DataTypes.STRING(9),
  },
  { timestamps: false, freezeTableName: true }
);

const Entrada = sequelize.define(
  "entrada",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    codigo: DataTypes.TEXT,
    evento: DataTypes.INTEGER,
    asistente: DataTypes.INTEGER,
    fecha_compra: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    precio: DataTypes.DECIMAL(10, 2),
    forma_pago: DataTypes.TEXT,
    tipo_entrada: DataTypes.TEXT,
    asiento: DataTypes.TEXT,
  },
  { timestamps: false, freezeTableName: true }
);

// Relación
Entrada.belongsTo(Asistente, { foreignKey: "asistente" });

/**
 * Simula la compra de una entrada para un evento por un asistente.
 * Si el asistente no existe, lo crea. Luego crea la entrada.
 * Todo ocurre en una transacción ACID.
 */
async function comprarEntradaSequelize({ eventoId, asistente }) {
  const t = await sequelize.transaction();
  try {
    // 1. Verificar si el asistente existe
    let asistenteDb = await Asistente.findOne({
      where: { dni: asistente.dni },
      transaction: t,
    });
    if (!asistenteDb) {
      // 2. Si no existe, lo creamos
      asistenteDb = await Asistente.create(
        {
          dni: asistente.dni,
          nombre: asistente.nombre,
          correo: asistente.correo,
          telefono: asistente.telefono,
        },
        { transaction: t }
      );
    }

    // 3. Insertar la entrada para el evento
    await Entrada.create(
      {
        codigo: "COD" + Date.now(),
        evento: eventoId,
        asistente: asistenteDb.getDataValue("id"),
        precio: 20.0,
        forma_pago: "tarjeta",
        tipo_entrada: "general",
        asiento: "A1",
      },
      { transaction: t }
    );

    // 4. Confirmar la transacción
    await t.commit();
    console.log("Transacción completada: entrada comprada (Sequelize)");
  } catch (err) {
    await t.rollback();
    console.error(
      "Error en la transacción, se revierte todo (Sequelize):",
      err.message
    );
  }
}

// Ejemplo de uso:
// comprarEntradaSequelize({
//   eventoId: 1,
//   asistente: {
//     dni: '12345678A',
//     nombre: 'Juan',
//     correo: 'juan@email.com',
//     telefono: '600123456',
//   }
// });
