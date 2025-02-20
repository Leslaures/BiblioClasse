import db from "../../database/db";
import type { Rows } from "../../database/db";

class parametreRepository {
  async insertDefaultParametre(
    userId: number,
    loanDuration: number,
    borrowLimit: number,
  ) {
    await db.query(
      `
      INSERT INTO parametre (user_id, loanDuration, borrowLimit) 
      VALUES (?, ?, ?)
    `,
      [userId, loanDuration, borrowLimit],
    );
  }

  async changeLoanDuration(userId: number, loanDuration: string) {
    await db.query(
      `
    UPDATE parametre 
    SET loanDuration = ? 
    WHERE user_id = ?
  `,
      [loanDuration, userId],
    );
  }

  async getLoanDuration(userId: number) {
    const [rows] = await db.query<Rows>(
      `
    SELECT loanDuration 
    FROM parametre 
    WHERE user_id = ?
  `,
      [userId],
    );
    if (!rows || rows.length === 0) {
      throw new Error("Paramètre non trouvé pour cet utilisateur");
    }
    return rows[0].loanDuration;
  }

  async changeBorrowLimit(userId: number, borrowLimit: string) {
    await db.query(
      `
    UPDATE parametre 
    SET borrowLimit = ? 
    WHERE user_id = ?
  `,
      [borrowLimit, userId],
    );
  }
  async getBorrowLimit(userId: number) {
    const [rows] = await db.query<Rows>(
      `
    SELECT borrowLimit 
    FROM parametre 
    WHERE user_id = ?
  `,
      [userId],
    );
    if (!rows || rows.length === 0) {
      throw new Error("Paramètre non trouvé pour cet utilisateur");
    }
    return rows[0].borrowLimit;
  }
}

export default new parametreRepository();
