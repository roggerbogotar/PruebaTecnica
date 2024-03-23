import React from "react";
import "./Login.page.scss";
import { login } from "../../services/authentication.service";
import { useForm } from "react-hook-form";
import { MainRoles } from "../../models/Role";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
  idNumber: string;
  password: string;
}

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<LoginFormInputs>({
    mode: "onChange",
  });

  const handleLogin = async (formData: LoginFormInputs): Promise<void> => {
    const { idNumber, password } = formData;
    const userLogged = await login(idNumber, btoa(password));
    if (userLogged) {
      if (userLogged.role.id === MainRoles.ADMINISTRATOR) {
        navigate("/administracion");
      } else {
        navigate("/ventas");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="container">
        <label htmlFor="uname">
          <b>Usuario</b>
        </label>
        <input type="text" placeholder="Ingrese usuario" id="uname" required {...register("idNumber")} />

        <label htmlFor="psw">
          <b>Contraseña</b>
        </label>
        <input type="password" placeholder="Ingrese contraseña" id="psw" required {...register("password")} />

        <button type="submit">Entrar</button>
      </div>
    </form>
  );
};

export default Login;
