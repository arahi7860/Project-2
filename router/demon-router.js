import express from "express";

const demonRouter = express.Router();

import {
  demonIndex,
  createDemon,
  showDemon,
  updateDemon,
  deleteDemon,
} from "../controller/demon-controller.js";

demonRouter.get("/", (req, res) => {
  res.json("One Piece is not peak fiction!");
});

demonRouter.get("/demons", demonIndex);
demonRouter.post("/demons", createDemon);
demonRouter.get("/demons/:name", showDemon);
demonRouter.put("/demons/:name", updateDemon);
demonRouter.delete("/demons/:name", deleteDemon);

// demonRouter.get("/demons/list", listDemons);
// demonRouter.post("/demons/list", postListDemons);
// demonRouter.get("demons/list/name", showListDemons);
// demonRouter.put("/demons/list/name", updateListDemons);
// demonRouter.delete("/demons/list/name", deleteListDemons);

export default demonRouter;
