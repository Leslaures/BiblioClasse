import e from "express";
import db from "../../database/db";
import type { Result, Rows } from "../../database/db";

class authRepository {
  async findByEmail(email: string) {
    const [rows] = await db.query<Rows>("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    return rows[0];
  }

  async create(nom: string, prenom: string, email: string, password: string) {
    const [result] = await db.query<Result>(
      "INSERT INTO user (nom, prenom, email, password) VALUES (?, ?, ?, ?)",
      [nom, prenom, email, password],
    );
    return result.insertId;
  }
}

export default new authRepository();
