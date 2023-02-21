import express from "express";
import mongoose from "mongoose";
import lifecycle from "./middleware/lifecycle.js";
import Demons from "../model.js";
// eslint-disable-next-line
import demonData from "../demon-data.json" assert { type: "json" };

const app = express();

const todoSchema = new mongoose.Schema({
  text: String,
});

const Todo = mongoose.model("Todo", todoSchema);

app.use(
  lifecycle({
    async setup() {
      console.log("Before handler");
      // Put your database connection here. e.g.
      // @ts-ignore
      await mongoose.connect(process.env.DATABASE_URL);
    },
    async cleanup() {
      console.log("After handler");
      // Put your database disconnection here. e.g.
      await mongoose.disconnect();
    },
  })
);

// Feel free to use a router and move this elsewhere.
app.get("/api", async (req, res) => {
  await Demons.deleteMany({});
  await Demons.create(demonData);
  const todos = await Todo.find();

  console.log(process.env.DATABASE_URL);
  res.json(demonData);
});

app.get("/api/demons", async (req, res) => {
  await Demons.deleteMany();
  await Demons.insertMany(demonData);
  const search = await Demons.find({});
  res.json(search);
});

// Don't use app.listen. Instead export app.
export default app;
