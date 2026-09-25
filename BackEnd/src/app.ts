import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes";


const app = express();

app.use(
    cors({
       origin: process.env.FRONTEND_URL ?? "http://localhost:5173"
    })
);

app.use(express.json());
app.get("/health", (req, res)=>{
    res.json({
        status:"ok",
        message:"BackEnd funcionando"
    }) })

app.use("/api/users", authRouter);

export default app;


