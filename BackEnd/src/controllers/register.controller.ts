import { Request, Response } from "express";
import { registerUser } from "../services/auth.service.js";

export async function register(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        message: "Nome, e-mail e senha são obrigatórios",
      });
      return;
    }

    const user = await registerUser(
      name,
      email,
      password,
    );

    res.status(201).json({
      message: "Usuário criado com sucesso",
      user,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "E-mail já cadastrado"
    ) {
      res.status(409).json({
        message: error.message,
      });
      return;
    }

    console.error(error);

    res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}