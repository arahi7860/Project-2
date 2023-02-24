// eslint-disable-all-lines
import express from "express";
import mongoose from "mongoose";
import demonRouter from "../router/demon-router.js";
import lifecycle from "./middleware/lifecycle.js";
// import "../seed.js";

const app = express();
app.use(express.json());

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
app.use("/api/", demonRouter);
// Feel free to use a router and move this elsewhere.

export default app;
