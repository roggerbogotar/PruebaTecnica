import { User } from "../models/User";

export const login = async (idNumber: string, password: string): Promise<User | null> => {
  return await fetch("http://localhost:4000/api/users/login", {
    method: "POST",
    body: JSON.stringify({ idNumber, password }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data: User) => {
      sessionStorage.setItem(btoa("userLogged"), btoa(JSON.stringify(data)));
      return data;
    })
    .catch((_) => {
      return null;
    });
};

export const logout = (): void => {
  sessionStorage.clear();
};
