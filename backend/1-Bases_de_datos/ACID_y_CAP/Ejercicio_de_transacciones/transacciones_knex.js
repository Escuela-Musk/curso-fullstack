// Ejemplo didáctico de transacción ACID usando Knex y la base de datos de Modelo.sql
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "usuario", // Cambia por tu usuario
    password: "contraseña", // Cambia por tu contraseña
    database: "basededatos", // Cambia por tu base de datos
    port: 5432,
  },
});

/**
 * Simula la compra de una entrada para un evento por un asistente.
 * Si el asistente no existe, lo crea. Luego crea la entrada.
 * Todo ocurre en una transacción ACID.
 */
async function comprarEntradaKnex({ eventoId, asistente }) {
  await knex.transaction(async (trx) => {
    try {
      // 1. Verificar si el asistente existe
      let asistenteDb = await trx("asistente")
        .where({ dni: asistente.dni })
        .first();
      let asistenteId;
      if (!asistenteDb) {
        // 2. Si no existe, lo creamos
        const ids = await trx("asistente")
          .insert({
            dni: asistente.dni,
            nombre: asistente.nombre,
            correo: asistente.correo,
            telefono: asistente.telefono,
          })
          .returning("id");
        asistenteId = Array.isArray(ids) ? ids[0] : ids;
      } else {
        asistenteId = asistenteDb.id;
      }

      // 3. Insertar la entrada para el evento
      await trx("entrada").insert({
        codigo: "COD" + Date.now(),
        evento: eventoId,
        asistente: asistenteId,
        precio: 20.0,
        forma_pago: "tarjeta",
        tipo_entrada: "general",
        asiento: "A1",
      });

      // 4. Confirmar la transacción (implícito si no hay error)
      console.log("Transacción completada: entrada comprada (Knex)");
    } catch (err) {
      // Si hay error, la transacción se revierte automáticamente
      console.error(
        "Error en la transacción, se revierte todo (Knex):",
        err.message
      );
      throw err;
    }
  });
}

// Ejemplo de uso:
// comprarEntradaKnex({
//   eventoId: 1,
//   asistente: {
//     dni: '12345678A',
//     nombre: 'Juan',
//     correo: 'juan@email.com',
//     telefono: '600123456',
//   }
// });
