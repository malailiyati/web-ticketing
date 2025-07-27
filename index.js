require("dotenv").config();
const express = require("express");
const axios = require("axios"); // <<< JANGAN LUPA
const path = require("path");
const app = express();

const API_KEY = process.env.KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fullPath = path.join(__dirname, "public");
console.log("Serving static files from:", fullPath);
app.use(express.static(fullPath));

app.get("/api/movies", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Gagal ambil data TMDB:", error.message);
    res.status(500).json({ error: "Gagal ambil data" });
  }
});

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
