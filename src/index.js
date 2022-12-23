import express from "express";
import spotify from "./provider/spotify.js";

const app = express();

app.get("/spotify", async (req, res) => {
  const params = req.query;
  const result = await spotify.recommendation(params);

  return res.json(result);
});

export default app
