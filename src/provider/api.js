import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
  },
});

export default api;
