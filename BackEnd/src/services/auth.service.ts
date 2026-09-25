import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {
  createUser,
  findUserByEmail,
} from "../repositories/auth.repository.js";

export async function registerUser(
  name: string,
  email: string,
  password: string,
) {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("E-mail já cadastrado");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userId = await createUser(
    name,
    email,
    hashedPassword,
  );

  return {
    id: userId,
    name,
    email,
  };
}

export async function loginUser(
  email: string,
  password: string,
) {
  const user = await findUserByEmail(email);

  if (!user) {
    return null;
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password,
  );

  if (!validPassword) {
    return null;
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET não configurado");
  }

  const token = jwt.sign(
    {
      sub: user.id,
      email: user.email,
    },
    secret,
    {
      expiresIn: "1h",
    },
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
}