import dotenv from "dotenv";
import path from "node:path";

import app from "./app.js";

dotenv.config({
  path: path.resolve(process.cwd(), "src/.env"),
});

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
    console.log(`Backend Rodando em localhost: ${PORT}`)
})
