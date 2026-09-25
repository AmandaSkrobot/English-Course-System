import { useState } from "react";
import { loginUser } from "../services/auth.service";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState<{
    id: number;
    name: string;
    email: string;
  } | null>(null);

  async function login(email: string, password: string) {
    setLoading(true);
    setError("");

    try {
      const response = await loginUser({
        email,
        password
      });

      setUser(response.user);

      return response;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Erro ao fazer login";

      setError(message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return {
    login,
    loading,
    error,
    user
  }
}