const BASE_URL = "https://api.themoviedb.org/3/movie";
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

if (movieId) {
  getMovieDetail(movieId);
} else {
  document.getElementById("movie-detail").innerText = "Film tidak ditemukan.";
}

function getMovieDetail(id) {
  const url = `${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const detailDiv = document.getElementById("movie-detail");
      detailDiv.innerHTML = `
        <h2>${data.title}</h2>
        <p><strong>Rating:</strong> ${data.vote_average}</p>
        <p>${data.overview}</p>
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}" />
      `;
    })
    .catch((err) => {
      console.error("Gagal ambil detail:", err);
      document.getElementById("movie-detail").innerText =
        "Gagal mengambil detail film.";
    });
}
