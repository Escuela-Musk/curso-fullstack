import React from "react";
import { Link } from "react-router-dom";

const hooks = [
  {
    name: "useState",
    path: "/use-state",
    description: "Permite añadir estado local a componentes funcionales.",
  },
  {
    name: "useEffect",
    path: "/use-effect",
    description: "Realiza efectos secundarios en componentes funcionales.",
  },
  {
    name: "useRef",
    path: "/use-ref",
    description: "Permite acceder y persistir valores mutables entre renders.",
  },
  {
    name: "useMemo",
    path: "/use-memo",
    description: "Memoriza valores calculados para optimizar el rendimiento.",
  },
  {
    name: "useCallback",
    path: "/use-callback",
    description: "Memoriza funciones para evitar renders innecesarios.",
  },
  {
    name: "useReducer",
    path: "/use-reducer",
    description: "Gestiona el estado complejo con un reductor (reducer).",
  },
];

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f6fa",
        color: "#222", // Color de fuente principal oscuro
      }}
    >
      {/* Tabla de contenido */}
      <nav style={{ minWidth: 200, marginRight: 40 }}>
        <h2 style={{ fontSize: "1.2em", marginBottom: 16, color: "#222" }}>
          Tabla de contenido
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {hooks.map((hook) => (
            <li key={hook.name} style={{ marginBottom: 12 }}>
              <Link
                to={hook.path}
                style={{
                  color: "#3b47a1", // Azul más oscuro y legible
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {hook.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Bloque central */}
      <main
        style={{
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 16px #0001",
          padding: 32,
          minWidth: 350,
          maxWidth: 500,
          color: "#222", // Color de fuente principal oscuro
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: 32, color: "#1a1a1a" }}>
          Ejemplos de React Hooks
        </h1>
        {hooks.map((hook) => (
          <section key={hook.name} style={{ marginBottom: 32 }}>
            <h3 style={{ marginBottom: 4, color: "#222" }}>{hook.name}</h3>
            <p style={{ margin: 0, color: "#444" }}>{hook.description}</p>
            <Link
              to={hook.path}
              style={{
                color: "#2d5be3", // Azul más oscuro y legible
                fontWeight: 600,
                display: "inline-block",
                marginTop: 8,
                textDecoration: "underline",
              }}
            >
              Ver ejemplo
            </Link>
          </section>
        ))}
      </main>
    </div>
  );
}
