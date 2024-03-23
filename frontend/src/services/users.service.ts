import { User } from "../models/User";

export const createUser = async (user: User): Promise<User[]> => {
  return await fetch("http://localhost:4000/api/users", {
    method: "POST",
    body: JSON.stringify({ ...user, roleId: user.role.id }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((_) => {
      const usersStorage = sessionStorage.getItem(btoa("users"));
      if (usersStorage) {
        const users: User[] = JSON.parse(atob(usersStorage));
        users.push(user);
        sessionStorage.setItem(btoa("users"), btoa(JSON.stringify(users)));
        console.log(users);
        return users;
      }

      sessionStorage.setItem(btoa("users"), btoa(JSON.stringify([{ ...user }])));
      return [{ ...user }];
    })
    .catch((_) => {
      return [];
    });
};

export const getUsers = async (): Promise<User[]> => {
  return await fetch("http://localhost:4000/api/users")
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem(btoa("users"), btoa(JSON.stringify(data)));
      return data;
    })
    .catch((_) => {
      sessionStorage.removeItem(btoa("users"));
      return [];
    });
};

export const updateUser = async (user: User): Promise<User[]> => {
  return await fetch(`http://localhost:4000/api/users/${user.id}`, {
    method: "PUT",
    body: JSON.stringify({ ...user, roleId: user.role.id }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => {
      const usersStorage = sessionStorage.getItem(btoa("users"));
      if (usersStorage) {
        const users: User[] = JSON.parse(atob(usersStorage));
        const newUsers = users.map((u) => {
          if (u.id === user.id) return user;
          return u;
        });
        sessionStorage.setItem(btoa("users"), btoa(JSON.stringify(newUsers)));
        return newUsers;
      }

      sessionStorage.setItem(btoa("users"), btoa(JSON.stringify([...data])));
      return [...data];
    })
    .catch((_) => {
      return [];
    });
};

export const deleteUser = async (user: User): Promise<User[]> => {
  return await fetch(`http://localhost:4000/api/users/${user.id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((_data) => {
      const usersStorage = sessionStorage.getItem(btoa("users"));
      if (usersStorage) {
        const users: User[] = JSON.parse(atob(usersStorage));
        const newUsers = users.filter((u) => u.id !== user.id);
        sessionStorage.setItem(btoa("users"), btoa(JSON.stringify(newUsers)));
        return newUsers;
      }
      return [];
    })
    .catch((_) => {
      return [];
    });
};
