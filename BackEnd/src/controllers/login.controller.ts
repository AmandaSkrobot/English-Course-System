import type { Request, Response } from "express";
import { loginUser } from "../services/auth.service.js";


export async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password} = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "E-mail e senha são obrigatórios"
      });

      return;
    }

    const user = await loginUser(email, password);

    if (!user) {
      res.status(401).json({
        message: "E-mail ou senha inválidos"
      });

      return;
    }

    res.status(200).json({
      message: "Login realizado com sucesso",
      user
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erro interno do servidor"
    });
  }
}