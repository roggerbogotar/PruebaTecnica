import React, { Fragment, useState } from "react";
import "./UserAdministration.component.scss";
import { User } from "../models/User";
import { createUser, deleteUser, getUsers, updateUser } from "../services/users.service";
import { useForm } from "react-hook-form";
import { MainRoles, NameRoles, getNameRole } from "../models/Role";

const UserAdministration = (): JSX.Element => {
  const { handleSubmit, register, formState, setValue } = useForm<User>({
    mode: "onChange",
  });
  const { isValid } = formState;

  const [users, setUsers] = useState<User[]>([]);
  const [isCreate, setIsCreate] = useState(true);

  const handleLoadUsers = (): void => {
    getUsers().then((data) => setUsers(data));
  };

  const handleSubmitUser = (formData: User): void => {
    if (isCreate) {
      const user = { ...formData, password: btoa(formData.password) } as User;
      console.log(user);
      createUser(user).then((data: User[]) => setUsers(data));
    } else {
      const user = { ...formData } as User;
      updateUser(user).then((data: User[]) => setUsers(data));
    }
  };

  const handleEdit = (user: User): void => {
    setIsCreate(false);

    const { id, idNumber, name, password, role, phone, mail } = user;
    setValue("id", id);
    setValue("name", name);
    setValue("idNumber", idNumber);
    setValue("password", password);
    setValue("phone", phone);
    setValue("mail", mail);
    setValue("role.id", role.id);
  };

  const handleDelete = (user: User): void => {
    deleteUser(user).then((data) => setUsers(data));
  };

  return (
    <main className="main">
      <form onSubmit={handleSubmit(handleSubmitUser)}>
        <div className="form-users">
          <h2>Formulario Usuarios</h2>
          <section>
            {!isCreate && (
              <span>
                <label htmlFor="pkey">Numero unico de indentificacion</label>
                <input type="text" id="pkey" disabled {...register("id")} />
              </span>
            )}
            <figure>
              <span>
                <label htmlFor="uname">Nombre</label>
                <input type="text" placeholder="Ingrese nombre de usuario" id="uname" required {...register("name")} />
              </span>
              <span>
                <label htmlFor="idNumber">Numero identificacion</label>
                <input type="number" placeholder="Ingrese numero de identificacion" id="idNumber" required {...register("idNumber")} />
              </span>
            </figure>
            <figure>
              <span>
                <label htmlFor="pwd">Contraseña</label>
                <input type="password" placeholder="Ingrese nueva contraseña" id="psw" required {...register("password")} />
              </span>
              <span>
                <label htmlFor="rol">Rol</label>
                <select id="select" required {...register("role.id")}>
                  <option value="">--- Selecciona un Rol ---</option>
                  <option value={MainRoles.ADMINISTRATOR}>{NameRoles.ADMINISTRATOR}</option>
                  <option value={MainRoles.SELLER}>{NameRoles.SELLER}</option>
                  <option value={MainRoles.PROVIDER}>{NameRoles.PROVIDER}</option>
                </select>
              </span>
            </figure>
            <figure>
              <span>
                <label htmlFor="phone">Telefono</label>
                <input type="number" placeholder="Ingrese telefono" id="phone" {...register("phone")} />
              </span>
              <span>
                <label htmlFor="email">Correo</label>
                <input type="email" placeholder="Ingrese coreo" id="email" {...register("mail")} />
              </span>
            </figure>
          </section>

          <button type="submit" disabled={!isValid}>
            {isCreate ? "Crear" : "Actualizar"}
          </button>
        </div>
      </form>

      <div className="users">
        <button onClick={handleLoadUsers}>{users.length <= 0 ? "Cargar " : "Volver a Cargar "}Usuarios</button>
        <section>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>id</th>
                <th>Usuario</th>
                <th>Rol</th>
                <th colSpan={2} scope="colgroup">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.idNumber}</td>
                  <td>{user.name}</td>
                  <td>{user.role.name}</td>
                  <td>
                    <button id="edit" onClick={() => handleEdit(user)}>
                      Editar
                    </button>
                  </td>
                  <td>
                    <button id="delete" onClick={() => handleDelete(user)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
};

export default UserAdministration;
