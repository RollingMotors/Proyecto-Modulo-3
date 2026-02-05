import { FaGithub } from "react-icons/fa";
import "./Nosotros.css";

const integrantes = [
  {
    id: 1,
    nombre: "Matias Lazarte",
    rol: "Lider Tecnico",
    descripcion:
      "Construyo la infraestructura técnica sólida que soporta cada función, siempre pensando en cómo cada línea de código mejora la experiencia global.",
    github: "https://github.com/matti434",
  },
  {
    id: 2,
    nombre: "Romina Danelutto",
    rol: "Scrum Master",
    descripcion:
      "Construyo la infraestructura técnica sólida que soporta cada función, siempre pensando en cómo cada línea de código mejora la experiencia global.",
    github: "https://github.com/rominadanelutto",
  },
  {
    id: 3,
    nombre: "Alvaro Morillo",
    rol: "Fullstack Developer",
    descripcion:
      "Conecto cada pieza del proyecto, asegurando que diseño, tecnología y estrategia trabajen en armonía hacia un objetivo común.",
    github: "https://github.com/alvaro-morillo",
  },
    {
    id: 4,
    nombre: "Miguel Zambrano",
    rol: "Fullstack Developer",
    descripcion:
      "Conecto cada pieza del proyecto, asegurando que diseño, tecnología y estrategia trabajen en armonía hacia un objetivo común.",
    github: "https://github.com/mizambran",
  },
    {
    id: 5,
    nombre: "Patricio Romero",
    rol: "Fullstack Developer",
    descripcion:
      "Conecto cada pieza del proyecto, asegurando que diseño, tecnología y estrategia trabajen en armonía hacia un objetivo común.",
    github: "https://github.com/pato1404",
  },
];

 const Nosotros = () => {
  return (
    <div className="nosotros-contenedor mt-5">
      <h1 className="titulo-nosotros">Nuestro Equipo</h1>

      <div className="grid-integrantes">
        {integrantes.map((persona) => (
          <div className="tarjeta-integrante" key={persona.id}>
            <img
              src={persona.foto}
              alt={persona.nombre}
              className="foto-integrante"
            />

            <h3>{persona.nombre}</h3>
            <p className="rol-integrante">{persona.rol}</p>
            <p className="descripcion-integrante">{persona.descripcion}</p>

            <a
              href={persona.github}
              target="_blank"
              className="link-github"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} /> GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nosotros