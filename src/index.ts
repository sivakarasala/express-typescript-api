import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log("hara hara mahadeva");
});
