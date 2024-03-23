import React, { Fragment, useState } from "react";
import "./Administration.page.scss";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authentication.service";
import UserAdministration from "../../components/UserAdministration.component";
import ProductAdministration from "../../components/ProductAdministration.component";

const Administration = (): JSX.Element => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("users");

  const handleLogout = (): void => {
    logout();
    navigate("/");
  };

  return (
    <div className="administration">
      <div className="topnav">
        <span onClick={() => setTab("users")}>Usuarios</span>
        <span onClick={() => setTab("products")}>Productos</span>
        <span onClick={() => setTab("inventory")}>Inventario</span>
        <span className="topnav__logout" onClick={handleLogout}>
          Cerrar sesión
        </span>
      </div>
      {tab === "users" && <UserAdministration />}
      {tab === "products" && <ProductAdministration />}
      {tab === "inventory" && (
        <Fragment>
          <h1>Inventarios</h1>
        </Fragment>
      )}
    </div>
  );
};

export default Administration;
