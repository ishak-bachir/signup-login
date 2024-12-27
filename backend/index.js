import express from "express";
import { insertUser, checkUser, checkEmailAndPassword } from "./models/user.js";
import { connectDB } from "./db/connectDB.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  //TODO: check email pattern
  if (await checkUser(email)) {
    res.status(204).send("User already exists!");
  } else {
    await insertUser(email, password);
    res.status(201).send("User created successfully");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userExists = await checkEmailAndPassword(email, password);
  if (userExists) {
    res.status(200).send("Logged in successfully");
  } else {
    res.status(204).send("Email or password invalid");
  }
});

app.listen(8000, () => console.log("Server up"));
