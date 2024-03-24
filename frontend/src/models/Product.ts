export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  description: string;
  model: string;
  createdAt: string;
  updatedAt: string;
}
export enum MainProduct {
  ENTRANCE = 1,
  EXIT = 2,
}

export enum NameProduct {
  ENTRANCE = "Entrada",
  EXIT = "Salida",
}

const products = [
  {
    id: MainProduct.ENTRANCE,
    name: NameProduct.ENTRANCE,
  },
  {
    id: MainProduct.EXIT,
    name: NameProduct.EXIT,
  },
];

export const getNameProduct = (id: MainProduct) => {
  return products.find((Product) => Product.id === +id)?.name;
};
