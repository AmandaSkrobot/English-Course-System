import { pool }from "../config/database.js";

type UserFromDatabase = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export async function findUserByEmail(
  email: string
): Promise<UserFromDatabase | null> {
  const connection = await pool.getConnection();

  try {
    const rows = await connection.query(
      `
      SELECT id, name, email, password
      FROM alunos_ingles
      WHERE email = ?
      LIMIT 1
      `,
      [email]
    );

    if (rows.length === 0) {
      return null;
    }

    return rows[0] as UserFromDatabase;
  } finally {
    connection.release();
  }

  
}

export async function createUser(
  name: string,
  email: string,
  password: string,
): Promise<number> {
  const connection = await pool.getConnection();

  try {
    const result = await connection.query(
      `
      INSERT INTO alunos_ingles (name, email, password)
      VALUES (?, ?, ?)
      `,
      [name, email, password],
    );

    return Number(result.insertId);
  } finally {
    connection.release();
  }
}