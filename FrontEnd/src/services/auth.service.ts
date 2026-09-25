import { apiFetch } from "./api";

type LoginData = {
  email: string;
  password: string;
};

type LoginResponse = {
  message: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export function loginUser(data: LoginData) {
  return apiFetch<LoginResponse>("/api/users/login", {
    method: "POST",
    body: JSON.stringify(data)
  });
}