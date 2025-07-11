CREATE TABLE IF NOT EXISTS Empleado (
	id SERIAL PRIMARY KEY,
	nombre TEXT,
	apellidos TEXT,
	nif TEXT,
	cargo TEXT,
	departamento TEXT,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NULL,
	deleted_at TIMESTAMP DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS Evento (
  id SERIAL PRIMARY KEY,
  organizador INTEGER REFERENCES empleado (id) ON UPDATE CASCADE ON DELETE SET NULL,
  titulo TEXT,
  codigo TEXT,
  tipo TEXT,
  fecha_inicio DATE,
  fecha_fin DATE,
  deleted_at TIMESTAMP DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS Telefono (
  empleado INTEGER NOT NULL REFERENCES empleado(id) ON UPDATE CASCADE ON DELETE CASCADE,
  telefono VARCHAR(9) NOT NULL,
  PRIMARY KEY (empleado, telefono)
);

CREATE TABLE IF NOT EXISTS Artista (
  id SERIAL PRIMARY KEY,
  nombre_artistico TEXT,
  pais TEXT,
  especialidad TEXT
);

CREATE TABLE IF NOT EXISTS Artista_evento (
  evento INTEGER NOT NULL REFERENCES evento(id) ON UPDATE CASCADE ON DELETE CASCADE,
  artista INTEGER NOT NULL REFERENCES Artista(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Grupo (
  id SERIAL PRIMARY KEY,
  nombre TEXT,
  pais TEXT,
  integrantes INTEGER,
  anho_formacion INTEGER,
  especialidad TEXT
);

CREATE TABLE IF NOT EXISTS Artista_grupo (
  artista INTEGER NOT NULL REFERENCES artista(id) ON UPDATE CASCADE ON DELETE CASCADE,
  grupo INTEGER NOT NULL REFERENCES grupo(id) ON UPDATE CASCADE ON DELETE CASCADE
);
  
CREATE TABLE  IF NOT EXISTS Espacio_fisico (
  id SERIAL PRIMARY KEY,
  nombre TEXT,
  ubicacion TEXT,
  capacidad INTEGER
);

CREATE TABLE IF NOT EXISTS Actividad (
  id SERIAL PRIMARY KEY,
  evento INTEGER NOT NULL REFERENCES evento(id) ON UPDATE CASCADE ON DELETE CASCADE,
  espacio_fisico INTEGER NOT NULL REFERENCES espacio_fisico(id) ON UPDATE CASCADE ON DELETE CASCADE,
  nombre TEXT,
  dia DATE,
  hora_inicio TIME,
  hora_fin TIME
);

CREATE TABLE IF NOT EXISTS Patrocinador (
  id SERIAL PRIMARY KEY,
  nombre TEXT,
  tipo TEXT,
  cif TEXT,
  pais TEXT,
  email TEXT,
  telefono VARCHAR(9),
);

CREATE TABLE IF NOT EXISTS Evento_patrocinador (
  evento INTEGER NOT NULL REFERENCES evento(id) ON UPDATE CASCADE ON DELETE CASCADE,
  patrocinador INTEGER NOT NULL REFERENCES patrocinador(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Asistente (
  id SERIAL PRIMARY KEY,
  dni TEXT,
  nombre TEXT,
  correo TEXT,
  telefono VARCHAR(9)
);

CREATE TABLE IF NOT EXISTS Entrada (
  id SERIAL PRIMARY KEY,
  codigo TEXT,
  evento INTEGER NOT NULL REFERENCES evento(id) ON UPDATE CASCADE ON DELETE CASCADE,
  asistente INTEGER NOT NULL REFERENCES asistente(id) ON UPDATE CASCADE ON DELETE CASCADE,
  fecha_compra TIMESTAMP DEFAULT NOW(),
  precio NUMERIC(10, 2),
  forma_pago TEXT,
  tipo_entrada TEXT,
  asiento TEXT
);
