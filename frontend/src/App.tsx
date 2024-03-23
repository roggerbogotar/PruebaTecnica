import React, { Fragment, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

const App = (): JSX.Element => {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {users.map((user: any) => (
        <div key={user?.id} className="usuario">
          <div>Nombre: {user?.name}</div>
          <div>Identificacion: {user?.idNumber}</div>
          <div>Rol: {user?.role?.name}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
