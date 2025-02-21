import "dotenv/config";
import dotenv from "dotenv";
dotenv.config();
import "../database/checkConnection";

import app from "./app";

console.info("DB_HOST:", process.env.DB_HOST); // Vérifie si DB_HOST est bien défini
console.info("DB_PORT:", process.env.DB_PORT); // Vérifie si DB_PORT est bien défini
console.info("DB_USER:", process.env.DB_USER); // Vérifie si DB_USER est bien défini
console.info("DB_NAME:", process.env.DB_NAME); // Vérifie si DB_NAME est bien défini
// Get the port from the environment variables
const port = Number.parseInt(process.env.APP_PORT ?? "3310", 10);

// Start the server and listen on the specified port
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API BiblioClasse");
});

// app
//   .listen(port, () => {
//     console.info(`Server is listening on port ${port}`);
//   })
//   .on("error", (err: Error) => {
//     console.error("Error:", err.message);
//   });

app
  .listen(port, "0.0.0.0", () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
