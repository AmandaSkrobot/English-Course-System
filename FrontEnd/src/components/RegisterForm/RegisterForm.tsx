import { useState } from "react";
import styles from "./RegisterForm.module.css";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");

  async function handleSubmit() {
    setError("");
    setSucess("");

    if (password !== confirmpassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email,
          password: password,
        }),
      });

    const data = await response.json();

    if (!response.ok) {
    throw new Error(data.message || "Erro ao realizar cadastro.");
}

      setSucess("Cadastro realizado com sucesso!");

      setName("");
      setEmail("");
      setPassword("");
      setConfirmpassword("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro inesperado ao realizar cadastro."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>Criar conta</h1>

      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          void handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={6}
          required
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmpassword}
          onChange={(event) => setConfirmpassword(event.target.value)}
          minLength={6}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        {sucess && <p style={{ color: "green" }}>{sucess}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </main>
  );
}