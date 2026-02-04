import { useState } from "react";
import { Link } from "react-router-dom";
import "./RecuperarContrasena.css";

const RecuperarContrasena = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const validarEmail = (value) => {
    const emailLimpio = value.trim();

    if (!emailLimpio) {
      return "El correo electrónico es obligatorio.";
    }

    if (emailLimpio.length < 6) {
      return "El correo electrónico es demasiado corto.";
    }

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailLimpio)) {
      return "Ingresá un correo electrónico válido.";
    }

    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (error) {
      setError(validarEmail(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensajeError = validarEmail(email);

    if (mensajeError) {
      setError(mensajeError);
      return;
    }

    setError("");
    setCargando(true);

    // Simulación de respuesta del backend
    setTimeout(() => {
      setEnviado(true);
      setCargando(false);
    }, 1500);
  };

  return (
    <section className="recuperar-container">
      <div className="recuperar-card">
        {!enviado ? (
          <>
            <h1>Recuperar contraseña</h1>

            <p className="recuperar-descripcion">
              Ingresá el correo electrónico asociado a tu cuenta.
              Si existe, te enviaremos un enlace para restablecer tu contraseña.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="email">Correo electrónico</label>

              <input
                id="email"
                type="email"
                placeholder="ejemplo@email.com"
                value={email}
                onChange={handleChange}
                className={error ? "input-error" : ""}
              />

              {error && <span className="error-text">{error}</span>}

              <button type="submit" disabled={cargando}>
                {cargando ? "Enviando..." : "Enviar enlace"}
              </button>
            </form>

            <div className="recuperar-footer">
              <span>¿Recordaste tu contraseña?</span>
              <Link to="/">Volver al inicio</Link>

            </div>
          </>
        ) : (
          <div className="recuperar-exito">
            <h1>Correo enviado 📩</h1>

            <p>
              Si <strong>{email.trim()}</strong> está registrado,
              recibirás un enlace para restablecer tu contraseña.
            </p>

            <Link to="/" className="recuperar-home">
              Volver al inicio
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecuperarContrasena;
