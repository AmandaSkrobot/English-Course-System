import dotenv from "dotenv";
import mariadb from "mariadb";
import path from "node:path";

const envPath = path.resolve(__dirname, "../.env");

const result = dotenv.config({
  path: envPath,
});

console.log("Caminho do .env:", envPath);
console.log("Erro ao carregar .env:", result.error?.message ?? "nenhum");

if (!process.env.DB_PASSWORD) {
  throw new Error("DB_PASSWORD não foi carregada.");
}

export const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});