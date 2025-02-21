// import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
import "../database/checkConnection";

import app from "./app";

console.info("MYSQL_HOST:", process.env.MYSQL_HOST);
console.info("MYSQL_PORT:", process.env.MYSQL_PORT);
console.info("MYSQL_USER:", process.env.MYSQL_USER);
console.info("MYSQL_PASSWORD:", process.env.MYSQL_PASSWORD);
console.info("MYSQL_DATABASE:", process.env.MYSQL_DATABASE);
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
