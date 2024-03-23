import { Role } from "./Role";

export interface User {
  id: number;
  name: string;
  idNumber: string;
  role: Role;
  createdAt: string;
  password: string;
  phone?: number;
  mail?: string;
}
