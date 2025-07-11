// Ejemplo didáctico de transacción ACID usando pg y la base de datos de Modelo.sql
const { Pool } = require("pg");

const pool = new Pool({
  user: "usuario", // Cambia por tu usuario
  host: "localhost",
  database: "basededatos", // Cambia por tu base de datos
  password: "contraseña", // Cambia por tu contraseña
  port: 5432,
});

/**
 * Simula la compra de una entrada para un evento por un asistente.
 * Si el asistente no existe, lo crea. Luego crea la entrada.
 * Todo ocurre en una transacción ACID.
 */
async function comprarEntrada({ eventoId, asistente }) {
  const client = await pool.connect();
  try {
    // Iniciar la transacción
    await client.query("BEGIN");

    // 1. Verificar si el asistente existe
    const resAsistente = await client.query(
      "SELECT id FROM asistente WHERE dni = $1",
      [asistente.dni]
    );
    let asistenteId;
    if (resAsistente.rows.length === 0) {
      // 2. Si no existe, lo creamos
      const insertAsistente = await client.query(
        "INSERT INTO asistente (dni, nombre, correo, telefono) VALUES ($1, $2, $3, $4) RETURNING id",
        [asistente.dni, asistente.nombre, asistente.correo, asistente.telefono]
      );
      asistenteId = insertAsistente.rows[0].id;
    } else {
      asistenteId = resAsistente.rows[0].id;
    }

    // 3. Insertar la entrada para el evento
    await client.query(
      "INSERT INTO entrada (codigo, evento, asistente, precio, forma_pago, tipo_entrada, asiento) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        "COD" + Date.now(), // código único
        eventoId,
        asistenteId,
        20.0, // precio ejemplo
        "tarjeta",
        "general",
        "A1", // asiento ejemplo
      ]
    );

    // 4. Confirmar la transacción
    await client.query("COMMIT");
    console.log("Transacción completada: entrada comprada");
  } catch (err) {
    // Si hay un error, revertir la transacción
    await client.query("ROLLBACK");
    console.error("Error en la transacción, se revierte todo:", err.message);
  } finally {
    // Liberar el cliente
    client.release();
  }
}

// Ejemplo de uso:
// comprarEntrada({
//   eventoId: 1,
//   asistente: {
//     dni: '12345678A',
//     nombre: 'Juan',
//     correo: 'juan@email.com',
//     telefono: '600123456',
//   }
// });
