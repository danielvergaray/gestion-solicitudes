import { BiHide } from "react-icons/bi";

const Formulario = () => {
  return (
    <section className="login-container">
      <div className="login">
        <h1>Login</h1>
        <div className="login-formulario">
          <form action="">
            <div>
              <label htmlFor="username">Username</label>
              <input
                name="username"
                onChange={(e) => saveUsername(e.target.value)}
                type="text"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                onChange={(e) => saveUserPass(e.target.value)}
                type="password"
              />
            </div>
            <div className="login-formulario-ocultar">
              <BiHide />
            </div>
          </form>
          <button>Ingresar</button>
          <p>3 intentos disponibles</p>
          <p className="recuperarPass">Olvidé contraseña</p>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
