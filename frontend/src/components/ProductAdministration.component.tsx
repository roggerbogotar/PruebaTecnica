import React, { useState } from "react";
import "./UserAdministration.component.scss";
import { useForm } from "react-hook-form";
import { Product } from "../models/Product";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../services/products.service";

const ProductAdministration = (): JSX.Element => {
  const { handleSubmit, register, formState, setValue } = useForm<Product>({
    mode: "onChange",
  });
  const { isValid } = formState;

  const [product, setProducts] = useState<Product[]>([]);
  const [isCreate, setIsCreate] = useState(true);

  const handleLoadProducts = (): void => {
    getProducts().then((data) => setProducts(data));
  };

  const handleSubmitProduct = (formData: Product): void => {
    if (isCreate) {
      createProduct(formData).then((data: Product[]) => setProducts(data));
    } else {
      updateProduct(formData).then((data: Product[]) => setProducts(data));
    }
  };

  const handleEdit = (product: Product): void => {
    setIsCreate(false);

    const { id, name, quantity, price, description, model, createdAt, updatedAt } = product;
    setValue("id", id);
    setValue("name", name);
    setValue("quantity", quantity);
    setValue("price", price);
    setValue("description", description);
    setValue("model", model);
    setValue("createdAt", createdAt);
    setValue("updatedAt", updatedAt);
  };

  const handleDelete = (product: Product): void => {
    deleteProduct(product).then((data) => setProducts(data));
  };

  return (
    <main className="main">
      <form onSubmit={handleSubmit(handleSubmitProduct)}>
        <div className="form-users">
          <h2>Formulario Productos</h2>
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
                <label htmlFor="quantity">Cantidad</label>
                <input type="number" placeholder="Ingrese la cantidad del producto" id="quantity" required {...register("quantity")} />
              </span>
            </figure>
            <figure>
              <span>
                <label htmlFor="model">Modelo</label>
                <input type="text" placeholder="Ingrese el modelo del producto" id="model" required {...register("model")} />
              </span>
              <span>
                <label htmlFor="price">Precio</label>
                <input type="number" placeholder="Ingrese el precio del producto" id="price" {...register("price")} />
              </span>
            </figure>
            <figure>
              <span>
                <label htmlFor="description">Descripcion</label>
                <input
                  type="text"
                  placeholder="Ingrese una descripcion del producto"
                  id="description"
                  required
                  {...register("description")}
                />
              </span>
            </figure>
          </section>

          <button type="submit" disabled={!isValid}>
            {isCreate ? "Crear" : "Actualizar"}
          </button>
        </div>
      </form>

      <div className="users">
        <button onClick={handleLoadProducts}>{product.length <= 0 ? "Cargar " : "Volver a Cargar "}Productos</button>
        <section>
          <table>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Modelo</th>
                <th colSpan={2} scope="colgroup">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {product.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.description}</td>
                  <td>{user.quantity}</td>
                  <td>{user.price}</td>
                  <td>{user.model}</td>
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

export default ProductAdministration;
