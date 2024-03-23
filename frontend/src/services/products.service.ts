import { Product } from "../models/Product";

export const createProduct = async (product: Product): Promise<Product[]> => {
  return await fetch("http://localhost:4000/api/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((_) => {
      const productsStorage = sessionStorage.getItem(btoa("products"));
      if (productsStorage) {
        const products: Product[] = JSON.parse(atob(productsStorage));
        products.push(product);
        sessionStorage.setItem(btoa("products"), btoa(JSON.stringify(products)));
        return products;
      }

      sessionStorage.setItem(btoa("products"), btoa(JSON.stringify([{ ...product }])));
      return [{ ...product }];
    })
    .catch((_) => {
      return [];
    });
};

export const getProducts = async (): Promise<Product[]> => {
  return await fetch("http://localhost:4000/api/products")
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem(btoa("products"), btoa(JSON.stringify(data)));
      return data;
    })
    .catch((_) => {
      sessionStorage.removeItem(btoa("products"));
      return [];
    });
};

export const updateProduct = async (product: Product): Promise<Product[]> => {
  return await fetch(`http://localhost:4000/api/products/${product.id}`, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => {
      const productsStorage = sessionStorage.getItem(btoa("products"));
      if (productsStorage) {
        const products: Product[] = JSON.parse(atob(productsStorage));
        const newProducts = products.map((p) => {
          if (p.id === product.id) return product;
          return p;
        });
        sessionStorage.setItem(btoa("products"), btoa(JSON.stringify(products)));
        return newProducts;
      }

      sessionStorage.setItem(btoa("products"), btoa(JSON.stringify([...data])));
      return [...data];
    })
    .catch((_) => {
      return [];
    });
};

export const deleteProduct = async (product: Product): Promise<Product[]> => {
  return await fetch(`http://localhost:4000/api/products/${product.id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((_data) => {
      const productsStorage = sessionStorage.getItem(btoa("products"));
      if (productsStorage) {
        const products: Product[] = JSON.parse(atob(productsStorage));
        const newProducts = products.map((u) => u.id !== product.id);
        sessionStorage.setItem(btoa("products"), btoa(JSON.stringify(newProducts)));
        return products;
      }
      return [];
    })
    .catch((_) => {
      return [];
    });
};
