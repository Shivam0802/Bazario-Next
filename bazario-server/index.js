import express from "express";
import cors from "cors";
import Dbconnect from "./dbConnect/dbconnect.js";
import UserRoutes from "./routes/user.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

Dbconnect();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", UserRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
