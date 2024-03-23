export interface Role {
  id: number;
  name?: string;
}

export enum MainRoles {
  ADMINISTRATOR = 1,
  SELLER = 2,
  PROVIDER = 3,
}

export enum NameRoles {
  ADMINISTRATOR = "Administrador",
  SELLER = "Vendedor",
  PROVIDER = "Proveedor",
}

const roles = [
  {
    id: MainRoles.ADMINISTRATOR,
    name: NameRoles.ADMINISTRATOR,
  },
  {
    id: MainRoles.SELLER,
    name: NameRoles.SELLER,
  },
  {
    id: MainRoles.PROVIDER,
    name: NameRoles.PROVIDER,
  },
];

export const getNameRole = (id: MainRoles) => {
  return roles.find((role) => role.id === +id)?.name;
};
